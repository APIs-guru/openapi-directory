import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteBudgetXAmzTargetEnum {
    AwsBudgetServiceGatewayDeleteBudget = "AWSBudgetServiceGateway.DeleteBudget"
}
export declare class DeleteBudgetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBudgetXAmzTargetEnum;
}
export declare class DeleteBudgetRequest extends SpeakeasyBase {
    headers: DeleteBudgetHeaders;
    request: shared.DeleteBudgetRequest;
}
export declare class DeleteBudgetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteBudgetResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
}
