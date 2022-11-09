import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostDeleteNotificationConfigurationsSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostDeleteNotificationConfigurationsSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostDeleteNotificationConfigurationsSecurity extends SpeakeasyBase {
    option1?: PostDeleteNotificationConfigurationsSecurityOption1;
    option2?: PostDeleteNotificationConfigurationsSecurityOption2;
}
export declare class PostDeleteNotificationConfigurationsRequest extends SpeakeasyBase {
    request?: any;
    security: PostDeleteNotificationConfigurationsSecurity;
}
export declare class PostDeleteNotificationConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: any;
    serviceError?: any;
    statusCode: number;
}
