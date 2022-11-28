import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateBudgetActionXAmzTargetEnum {
    AwsBudgetServiceGatewayUpdateBudgetAction = "AWSBudgetServiceGateway.UpdateBudgetAction"
}
export declare class UpdateBudgetActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBudgetActionXAmzTargetEnum;
}
export declare class UpdateBudgetActionRequest extends SpeakeasyBase {
    headers: UpdateBudgetActionHeaders;
    request: shared.UpdateBudgetActionRequest;
}
export declare class UpdateBudgetActionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    resourceLockedException?: any;
    statusCode: number;
    updateBudgetActionResponse?: shared.UpdateBudgetActionResponse;
}
