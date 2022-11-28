import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateBudgetXAmzTargetEnum {
    AwsBudgetServiceGatewayUpdateBudget = "AWSBudgetServiceGateway.UpdateBudget"
}
export declare class UpdateBudgetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBudgetXAmzTargetEnum;
}
export declare class UpdateBudgetRequest extends SpeakeasyBase {
    headers: UpdateBudgetHeaders;
    request: shared.UpdateBudgetRequest;
}
export declare class UpdateBudgetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notFoundException?: any;
    statusCode: number;
    updateBudgetResponse?: Map<string, any>;
}
