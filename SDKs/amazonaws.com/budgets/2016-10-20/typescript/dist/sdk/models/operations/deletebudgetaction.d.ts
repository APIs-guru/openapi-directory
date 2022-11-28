import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBudgetActionXAmzTargetEnum {
    AwsBudgetServiceGatewayDeleteBudgetAction = "AWSBudgetServiceGateway.DeleteBudgetAction"
}
export declare class DeleteBudgetActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBudgetActionXAmzTargetEnum;
}
export declare class DeleteBudgetActionRequest extends SpeakeasyBase {
    headers: DeleteBudgetActionHeaders;
    request: shared.DeleteBudgetActionRequest;
}
export declare class DeleteBudgetActionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteBudgetActionResponse?: shared.DeleteBudgetActionResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    resourceLockedException?: any;
    statusCode: number;
}
