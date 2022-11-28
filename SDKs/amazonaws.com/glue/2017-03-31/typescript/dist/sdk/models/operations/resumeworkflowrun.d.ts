import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResumeWorkflowRunXAmzTargetEnum {
    AwsGlueResumeWorkflowRun = "AWSGlue.ResumeWorkflowRun"
}
export declare class ResumeWorkflowRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResumeWorkflowRunXAmzTargetEnum;
}
export declare class ResumeWorkflowRunRequest extends SpeakeasyBase {
    headers: ResumeWorkflowRunHeaders;
    request: shared.ResumeWorkflowRunRequest;
}
export declare class ResumeWorkflowRunResponse extends SpeakeasyBase {
    concurrentRunsExceededException?: any;
    contentType: string;
    entityNotFoundException?: any;
    illegalWorkflowStateException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resumeWorkflowRunResponse?: shared.ResumeWorkflowRunResponse;
    statusCode: number;
}
