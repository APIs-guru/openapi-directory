import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetWorkflowRunPropertiesXAmzTargetEnum {
    AwsGlueGetWorkflowRunProperties = "AWSGlue.GetWorkflowRunProperties"
}
export declare class GetWorkflowRunPropertiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkflowRunPropertiesXAmzTargetEnum;
}
export declare class GetWorkflowRunPropertiesRequest extends SpeakeasyBase {
    headers: GetWorkflowRunPropertiesHeaders;
    request: shared.GetWorkflowRunPropertiesRequest;
}
export declare class GetWorkflowRunPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getWorkflowRunPropertiesResponse?: shared.GetWorkflowRunPropertiesResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
