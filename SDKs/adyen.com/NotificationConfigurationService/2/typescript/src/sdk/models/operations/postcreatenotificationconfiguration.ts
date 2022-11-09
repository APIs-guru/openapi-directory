import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCreateNotificationConfigurationSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostCreateNotificationConfigurationSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostCreateNotificationConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostCreateNotificationConfigurationSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostCreateNotificationConfigurationSecurityOption2;
}


export class PostCreateNotificationConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostCreateNotificationConfigurationSecurity;
}


export class PostCreateNotificationConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNotificationConfigurationResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
