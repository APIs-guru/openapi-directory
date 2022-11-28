import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetWorkflowXAmzTargetEnum {
    AwsGlueGetWorkflow = "AWSGlue.GetWorkflow"
}
export declare class GetWorkflowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkflowXAmzTargetEnum;
}
export declare class GetWorkflowRequest extends SpeakeasyBase {
    headers: GetWorkflowHeaders;
    request: shared.GetWorkflowRequest;
}
export declare class GetWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getWorkflowResponse?: shared.GetWorkflowResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
