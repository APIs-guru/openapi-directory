import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCreateNotificationConfigurationSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostCreateNotificationConfigurationSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostCreateNotificationConfigurationSecurity extends SpeakeasyBase {
    option1?: PostCreateNotificationConfigurationSecurityOption1;
    option2?: PostCreateNotificationConfigurationSecurityOption2;
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
