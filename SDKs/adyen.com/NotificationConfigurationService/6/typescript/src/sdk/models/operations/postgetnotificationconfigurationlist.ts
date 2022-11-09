import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGetNotificationConfigurationListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostGetNotificationConfigurationListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class PostGetNotificationConfigurationListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostGetNotificationConfigurationListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostGetNotificationConfigurationListSecurityOption2;
}


export class PostGetNotificationConfigurationListRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PostGetNotificationConfigurationListSecurity;
}


export class PostGetNotificationConfigurationListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNotificationConfigurationListResponse?: any;

  @Metadata()
  serviceError?: any;

  @Metadata()
  statusCode: number;
}
