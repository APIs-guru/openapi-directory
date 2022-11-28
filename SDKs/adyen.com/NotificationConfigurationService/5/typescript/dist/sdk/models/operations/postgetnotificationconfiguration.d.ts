import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGetNotificationConfigurationSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostGetNotificationConfigurationRequest extends SpeakeasyBase {
    request?: any;
    security: PostGetNotificationConfigurationSecurity;
}
export declare class PostGetNotificationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getNotificationConfigurationResponse?: any;
    serviceError?: any;
    statusCode: number;
}
