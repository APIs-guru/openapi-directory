import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGetNotificationConfigurationSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostGetNotificationConfigurationSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostGetNotificationConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostGetNotificationConfigurationSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostGetNotificationConfigurationSecurityOption2;
}


export class PostGetNotificationConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostGetNotificationConfigurationSecurity;
}


export class PostGetNotificationConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNotificationConfigurationResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
