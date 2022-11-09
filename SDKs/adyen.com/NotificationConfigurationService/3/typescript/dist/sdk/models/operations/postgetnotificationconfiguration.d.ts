import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGetNotificationConfigurationSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostGetNotificationConfigurationSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostGetNotificationConfigurationSecurity extends SpeakeasyBase {
    option1?: PostGetNotificationConfigurationSecurityOption1;
    option2?: PostGetNotificationConfigurationSecurityOption2;
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
