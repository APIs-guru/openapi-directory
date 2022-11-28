import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGet3dsAvailabilitySecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
