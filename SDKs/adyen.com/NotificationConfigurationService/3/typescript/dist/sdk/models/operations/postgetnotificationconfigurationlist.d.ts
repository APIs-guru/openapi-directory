import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGetNotificationConfigurationListSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostGetNotificationConfigurationListRequest extends SpeakeasyBase {
    request?: any;
    security: PostGetNotificationConfigurationListSecurity;
}
export declare class PostGetNotificationConfigurationListResponse extends SpeakeasyBase {
    contentType: string;
    getNotificationConfigurationListResponse?: any;
    serviceError?: any;
    statusCode: number;
}
