import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGetOnboardingUrlSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
