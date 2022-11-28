import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBudgetPerformanceHistoryQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeBudgetPerformanceHistoryXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeBudgetPerformanceHistory = "AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory"
}
export declare class DescribeBudgetPerformanceHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBudgetPerformanceHistoryXAmzTargetEnum;
}
export declare class DescribeBudgetPerformanceHistoryRequest extends SpeakeasyBase {
    queryParams: DescribeBudgetPerformanceHistoryQueryParams;
    headers: DescribeBudgetPerformanceHistoryHeaders;
    request: shared.DescribeBudgetPerformanceHistoryRequest;
}
export declare class DescribeBudgetPerformanceHistoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeBudgetPerformanceHistoryResponse?: shared.DescribeBudgetPerformanceHistoryResponse;
    expiredNextTokenException?: any;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
