import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGetCostEstimateSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostGetCostEstimateRequest extends SpeakeasyBase {
    request?: any;
    security: PostGetCostEstimateSecurity;
}
export declare class PostGetCostEstimateResponse extends SpeakeasyBase {
    contentType: string;
    costEstimateResponse?: any;
    serviceError?: any;
    statusCode: number;
}
