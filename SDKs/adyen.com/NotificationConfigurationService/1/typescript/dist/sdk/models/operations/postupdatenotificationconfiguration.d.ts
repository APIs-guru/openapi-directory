import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUpdateNotificationConfigurationSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostUpdateNotificationConfigurationRequest extends SpeakeasyBase {
    request?: any;
    security: PostUpdateNotificationConfigurationSecurity;
}
export declare class PostUpdateNotificationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getNotificationConfigurationResponse?: any;
    serviceError?: any;
    statusCode: number;
}
