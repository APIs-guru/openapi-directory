import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUpdateAccountHolderSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostUpdateAccountHolderSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostUpdateAccountHolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostUpdateAccountHolderSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostUpdateAccountHolderSecurityOption2;
}


export class PostUpdateAccountHolderRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostUpdateAccountHolderSecurity;
}


export class PostUpdateAccountHolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAccountHolderResponse?: any;
}
