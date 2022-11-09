import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGet3dsAvailabilitySecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostGet3dsAvailabilitySecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostGet3dsAvailabilitySecurity extends SpeakeasyBase {
    option1?: PostGet3dsAvailabilitySecurityOption1;
    option2?: PostGet3dsAvailabilitySecurityOption2;
}
export declare class PostGet3dsAvailabilityRequest extends SpeakeasyBase {
    request?: any;
    security: PostGet3dsAvailabilitySecurity;
}
export declare class PostGet3dsAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    threeDsAvailabilityResponse?: any;
}
