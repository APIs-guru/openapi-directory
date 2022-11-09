import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostUpdateNotificationConfigurationSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostUpdateNotificationConfigurationSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostUpdateNotificationConfigurationSecurity extends SpeakeasyBase {
    option1?: PostUpdateNotificationConfigurationSecurityOption1;
    option2?: PostUpdateNotificationConfigurationSecurityOption2;
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
