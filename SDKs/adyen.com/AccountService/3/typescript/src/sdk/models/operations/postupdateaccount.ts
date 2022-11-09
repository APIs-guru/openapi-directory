import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUpdateAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostUpdateAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostUpdateAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostUpdateAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostUpdateAccountSecurityOption2;
}


export class PostUpdateAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostUpdateAccountSecurity;
}


export class PostUpdateAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateAccountResponse?: any;
}
