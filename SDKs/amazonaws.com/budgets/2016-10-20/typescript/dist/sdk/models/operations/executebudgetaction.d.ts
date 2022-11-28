import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExecuteBudgetActionXAmzTargetEnum {
    AwsBudgetServiceGatewayExecuteBudgetAction = "AWSBudgetServiceGateway.ExecuteBudgetAction"
}
export declare class ExecuteBudgetActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteBudgetActionXAmzTargetEnum;
}
export declare class ExecuteBudgetActionRequest extends SpeakeasyBase {
    headers: ExecuteBudgetActionHeaders;
    request: shared.ExecuteBudgetActionRequest;
}
export declare class ExecuteBudgetActionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    executeBudgetActionResponse?: shared.ExecuteBudgetActionResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    resourceLockedException?: any;
    statusCode: number;
}
