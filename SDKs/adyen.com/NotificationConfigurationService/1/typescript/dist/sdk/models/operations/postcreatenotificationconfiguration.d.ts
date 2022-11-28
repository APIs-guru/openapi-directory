import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreateNotificationConfigurationSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostCreateNotificationConfigurationRequest extends SpeakeasyBase {
    request?: any;
    security: PostCreateNotificationConfigurationSecurity;
}
export declare class PostCreateNotificationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getNotificationConfigurationResponse?: any;
    serviceError?: any;
    statusCode: number;
}
