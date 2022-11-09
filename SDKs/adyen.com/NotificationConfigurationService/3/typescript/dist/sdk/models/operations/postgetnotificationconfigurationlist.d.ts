import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGetNotificationConfigurationListSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostGetNotificationConfigurationListSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostGetNotificationConfigurationListSecurity extends SpeakeasyBase {
    option1?: PostGetNotificationConfigurationListSecurityOption1;
    option2?: PostGetNotificationConfigurationListSecurityOption2;
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
