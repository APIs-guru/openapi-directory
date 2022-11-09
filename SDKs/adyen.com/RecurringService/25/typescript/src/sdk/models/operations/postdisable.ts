import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDisableSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostDisableSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostDisableSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostDisableSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostDisableSecurityOption2;
}


export class PostDisableRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostDisableSecurity;
}


export class PostDisableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disableResult?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
