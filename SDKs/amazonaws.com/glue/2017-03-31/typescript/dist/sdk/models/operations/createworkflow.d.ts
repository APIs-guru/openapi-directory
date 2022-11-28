import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWorkflowXAmzTargetEnum {
    AwsGlueCreateWorkflow = "AWSGlue.CreateWorkflow"
}
export declare class CreateWorkflowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkflowXAmzTargetEnum;
}
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    headers: CreateWorkflowHeaders;
    request: shared.CreateWorkflowRequest;
}
export declare class CreateWorkflowResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createWorkflowResponse?: shared.CreateWorkflowResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
