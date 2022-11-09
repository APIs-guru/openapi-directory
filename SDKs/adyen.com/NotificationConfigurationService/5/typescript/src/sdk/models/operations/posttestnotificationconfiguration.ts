import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTestNotificationConfigurationSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostTestNotificationConfigurationSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostTestNotificationConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostTestNotificationConfigurationSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostTestNotificationConfigurationSecurityOption2;
}


export class PostTestNotificationConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostTestNotificationConfigurationSecurity;
}


export class PostTestNotificationConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testNotificationConfigurationResponse?: any;
}
