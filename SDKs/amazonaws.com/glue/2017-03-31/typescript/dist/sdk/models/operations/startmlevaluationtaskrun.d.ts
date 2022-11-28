import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartMlEvaluationTaskRunXAmzTargetEnum {
    AwsGlueStartMlEvaluationTaskRun = "AWSGlue.StartMLEvaluationTaskRun"
}
export declare class StartMlEvaluationTaskRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMlEvaluationTaskRunXAmzTargetEnum;
}
export declare class StartMlEvaluationTaskRunRequest extends SpeakeasyBase {
    headers: StartMlEvaluationTaskRunHeaders;
    request: shared.StartMlEvaluationTaskRunRequest;
}
export declare class StartMlEvaluationTaskRunResponse extends SpeakeasyBase {
    concurrentRunsExceededException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    mlTransformNotReadyException?: any;
    operationTimeoutException?: any;
    startMlEvaluationTaskRunResponse?: shared.StartMlEvaluationTaskRunResponse;
    statusCode: number;
}
