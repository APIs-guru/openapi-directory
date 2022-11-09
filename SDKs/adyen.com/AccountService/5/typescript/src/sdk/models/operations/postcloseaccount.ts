import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCloseAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostCloseAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostCloseAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostCloseAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostCloseAccountSecurityOption2;
}


export class PostCloseAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostCloseAccountSecurity;
}


export class PostCloseAccountResponse extends SpeakeasyBase {
  @Metadata()
  closeAccountResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
