import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDeleteNotificationConfigurationsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
