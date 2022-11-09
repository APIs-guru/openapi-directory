import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGetCostEstimateSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostGetCostEstimateSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostGetCostEstimateSecurity extends SpeakeasyBase {
    option1?: PostGetCostEstimateSecurityOption1;
    option2?: PostGetCostEstimateSecurityOption2;
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
