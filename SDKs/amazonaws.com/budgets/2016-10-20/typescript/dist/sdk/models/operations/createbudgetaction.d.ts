import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBudgetActionXAmzTargetEnum {
    AwsBudgetServiceGatewayCreateBudgetAction = "AWSBudgetServiceGateway.CreateBudgetAction"
}
export declare class CreateBudgetActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBudgetActionXAmzTargetEnum;
}
export declare class CreateBudgetActionRequest extends SpeakeasyBase {
    headers: CreateBudgetActionHeaders;
    request: shared.CreateBudgetActionRequest;
}
export declare class CreateBudgetActionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createBudgetActionResponse?: shared.CreateBudgetActionResponse;
    creationLimitExceededException?: any;
    duplicateRecordException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
