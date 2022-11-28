import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBudgetActionsForAccountQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeBudgetActionsForAccountXAmzTargetEnum {
    AwsBudgetServiceGatewayDescribeBudgetActionsForAccount = "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount"
}
export declare class DescribeBudgetActionsForAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBudgetActionsForAccountXAmzTargetEnum;
}
export declare class DescribeBudgetActionsForAccountRequest extends SpeakeasyBase {
    queryParams: DescribeBudgetActionsForAccountQueryParams;
    headers: DescribeBudgetActionsForAccountHeaders;
    request: shared.DescribeBudgetActionsForAccountRequest;
}
export declare class DescribeBudgetActionsForAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeBudgetActionsForAccountResponse?: shared.DescribeBudgetActionsForAccountResponse;
    internalErrorException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    statusCode: number;
}
