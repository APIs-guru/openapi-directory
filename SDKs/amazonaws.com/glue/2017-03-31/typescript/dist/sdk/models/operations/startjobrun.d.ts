import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartJobRunXAmzTargetEnum {
    AwsGlueStartJobRun = "AWSGlue.StartJobRun"
}
export declare class StartJobRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartJobRunXAmzTargetEnum;
}
export declare class StartJobRunRequest extends SpeakeasyBase {
    headers: StartJobRunHeaders;
    request: shared.StartJobRunRequest;
}
export declare class StartJobRunResponse extends SpeakeasyBase {
    concurrentRunsExceededException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    startJobRunResponse?: shared.StartJobRunResponse;
    statusCode: number;
}
