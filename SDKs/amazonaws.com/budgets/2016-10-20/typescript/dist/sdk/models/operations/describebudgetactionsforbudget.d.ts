import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBudgetActionsForBudgetQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeBudgetActionsForBudgetXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeBudgetActionsForBudget = "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget"
}
export declare class DescribeBudgetActionsForBudgetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBudgetActionsForBudgetXAmzTargetEnum;
}
export declare class DescribeBudgetActionsForBudgetRequest extends SpeakeasyBase {
    queryParams: DescribeBudgetActionsForBudgetQueryParams;
    headers: DescribeBudgetActionsForBudgetHeaders;
    request: shared.DescribeBudgetActionsForBudgetRequest;
}
export declare class DescribeBudgetActionsForBudgetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeBudgetActionsForBudgetResponse?: shared.DescribeBudgetActionsForBudgetResponse;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
