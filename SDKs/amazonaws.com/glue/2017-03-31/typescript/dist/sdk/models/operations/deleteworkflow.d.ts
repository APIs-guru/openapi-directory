import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWorkflowXAmzTargetEnum {
    AwsGlueDeleteWorkflow = "AWSGlue.DeleteWorkflow"
}
export declare class DeleteWorkflowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkflowXAmzTargetEnum;
}
export declare class DeleteWorkflowRequest extends SpeakeasyBase {
    headers: DeleteWorkflowHeaders;
    request: shared.DeleteWorkflowRequest;
}
export declare class DeleteWorkflowResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteWorkflowResponse?: shared.DeleteWorkflowResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
