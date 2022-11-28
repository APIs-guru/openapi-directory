import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateWorkflowXAmzTargetEnum {
    AwsGlueUpdateWorkflow = "AWSGlue.UpdateWorkflow"
}
export declare class UpdateWorkflowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkflowXAmzTargetEnum;
}
export declare class UpdateWorkflowRequest extends SpeakeasyBase {
    headers: UpdateWorkflowHeaders;
    request: shared.UpdateWorkflowRequest;
}
export declare class UpdateWorkflowResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateWorkflowResponse?: shared.UpdateWorkflowResponse;
}
