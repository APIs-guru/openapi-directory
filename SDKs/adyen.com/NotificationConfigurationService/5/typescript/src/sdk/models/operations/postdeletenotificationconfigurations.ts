import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDeleteNotificationConfigurationsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostDeleteNotificationConfigurationsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostDeleteNotificationConfigurationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostDeleteNotificationConfigurationsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostDeleteNotificationConfigurationsSecurityOption2;
}


export class PostDeleteNotificationConfigurationsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostDeleteNotificationConfigurationsSecurity;
}


export class PostDeleteNotificationConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
