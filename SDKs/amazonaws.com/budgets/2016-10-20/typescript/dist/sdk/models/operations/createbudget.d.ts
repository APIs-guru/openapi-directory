import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBudgetXAmzTargetEnum {
    AwsBudgetServiceGatewayCreateBudget = "AWSBudgetServiceGateway.CreateBudget"
}
export declare class CreateBudgetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBudgetXAmzTargetEnum;
}
export declare class CreateBudgetRequest extends SpeakeasyBase {
    headers: CreateBudgetHeaders;
    request: shared.CreateBudgetRequest;
}
export declare class CreateBudgetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createBudgetResponse?: Map<string, any>;
    creationLimitExceededException?: any;
    duplicateRecordException?: any;
    internalErrorException?: any;
    invalidParameterException?: any;
    statusCode: number;
}
