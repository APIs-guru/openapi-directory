import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCreateAccountSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostCreateAccountSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostCreateAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostCreateAccountSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostCreateAccountSecurityOption2;
}


export class PostCreateAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostCreateAccountSecurity;
}


export class PostCreateAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createAccountResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
