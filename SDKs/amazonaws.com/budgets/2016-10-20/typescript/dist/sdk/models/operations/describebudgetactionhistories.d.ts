import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBudgetActionHistoriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeBudgetActionHistoriesXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeBudgetActionHistories = "AWSBudgetServiceGateway.DescribeBudgetActionHistories"
}
export declare class DescribeBudgetActionHistoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBudgetActionHistoriesXAmzTargetEnum;
}
export declare class DescribeBudgetActionHistoriesRequest extends SpeakeasyBase {
    queryParams: DescribeBudgetActionHistoriesQueryParams;
    headers: DescribeBudgetActionHistoriesHeaders;
    request: shared.DescribeBudgetActionHistoriesRequest;
}
export declare class DescribeBudgetActionHistoriesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeBudgetActionHistoriesResponse?: shared.DescribeBudgetActionHistoriesResponse;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
