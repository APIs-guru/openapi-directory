import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUpdateNotificationConfigurationSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostUpdateNotificationConfigurationSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostUpdateNotificationConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostUpdateNotificationConfigurationSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostUpdateNotificationConfigurationSecurityOption2;
}


export class PostUpdateNotificationConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostUpdateNotificationConfigurationSecurity;
}


export class PostUpdateNotificationConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNotificationConfigurationResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
