import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCostEstimationQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetCostEstimationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCostEstimationRequest extends SpeakeasyBase {
    queryParams: GetCostEstimationQueryParams;
    headers: GetCostEstimationHeaders;
}
export declare class GetCostEstimationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getCostEstimationResponse?: shared.GetCostEstimationResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
