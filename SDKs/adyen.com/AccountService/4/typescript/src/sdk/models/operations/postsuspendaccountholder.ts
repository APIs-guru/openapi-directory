import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSuspendAccountHolderSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostSuspendAccountHolderSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostSuspendAccountHolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostSuspendAccountHolderSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostSuspendAccountHolderSecurityOption2;
}


export class PostSuspendAccountHolderRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostSuspendAccountHolderSecurity;
}


export class PostSuspendAccountHolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  suspendAccountHolderResponse?: any;
}
