import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostTestNotificationConfigurationSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostTestNotificationConfigurationSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostTestNotificationConfigurationSecurity extends SpeakeasyBase {
    option1?: PostTestNotificationConfigurationSecurityOption1;
    option2?: PostTestNotificationConfigurationSecurityOption2;
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
