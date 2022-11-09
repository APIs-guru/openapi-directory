import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCloseAccountHolderSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostCloseAccountHolderSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostCloseAccountHolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostCloseAccountHolderSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostCloseAccountHolderSecurityOption2;
}


export class PostCloseAccountHolderRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostCloseAccountHolderSecurity;
}


export class PostCloseAccountHolderResponse extends SpeakeasyBase {
  @Metadata()
  closeAccountHolderResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
