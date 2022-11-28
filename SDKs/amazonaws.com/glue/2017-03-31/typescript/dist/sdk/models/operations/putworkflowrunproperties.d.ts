import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutWorkflowRunPropertiesXAmzTargetEnum {
    AwsGluePutWorkflowRunProperties = "AWSGlue.PutWorkflowRunProperties"
}
export declare class PutWorkflowRunPropertiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutWorkflowRunPropertiesXAmzTargetEnum;
}
export declare class PutWorkflowRunPropertiesRequest extends SpeakeasyBase {
    headers: PutWorkflowRunPropertiesHeaders;
    request: shared.PutWorkflowRunPropertiesRequest;
}
export declare class PutWorkflowRunPropertiesResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    putWorkflowRunPropertiesResponse?: Map<string, any>;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
