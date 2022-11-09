import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCheckAccountHolderSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostCheckAccountHolderSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostCheckAccountHolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostCheckAccountHolderSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostCheckAccountHolderSecurityOption2;
}


export class PostCheckAccountHolderRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostCheckAccountHolderSecurity;
}


export class PostCheckAccountHolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
