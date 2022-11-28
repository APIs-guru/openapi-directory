import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTestNotificationConfigurationSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostTestNotificationConfigurationRequest extends SpeakeasyBase {
    request?: any;
    security: PostTestNotificationConfigurationSecurity;
}
export declare class PostTestNotificationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    testNotificationConfigurationResponse?: any;
}
