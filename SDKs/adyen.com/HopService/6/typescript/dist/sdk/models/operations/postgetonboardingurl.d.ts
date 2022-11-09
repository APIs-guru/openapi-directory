import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGetOnboardingUrlSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostGetOnboardingUrlSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostGetOnboardingUrlSecurity extends SpeakeasyBase {
    option1?: PostGetOnboardingUrlSecurityOption1;
    option2?: PostGetOnboardingUrlSecurityOption2;
}
export declare class PostGetOnboardingUrlRequest extends SpeakeasyBase {
    request?: any;
    security: PostGetOnboardingUrlSecurity;
}
export declare class PostGetOnboardingUrlResponse extends SpeakeasyBase {
    contentType: string;
    getOnboardingUrlResponse?: any;
    serviceError?: any;
    statusCode: number;
}
