import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartMlLabelingSetGenerationTaskRunXAmzTargetEnum {
    AwsGlueStartMlLabelingSetGenerationTaskRun = "AWSGlue.StartMLLabelingSetGenerationTaskRun"
}
export declare class StartMlLabelingSetGenerationTaskRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMlLabelingSetGenerationTaskRunXAmzTargetEnum;
}
export declare class StartMlLabelingSetGenerationTaskRunRequest extends SpeakeasyBase {
    headers: StartMlLabelingSetGenerationTaskRunHeaders;
    request: shared.StartMlLabelingSetGenerationTaskRunRequest;
}
export declare class StartMlLabelingSetGenerationTaskRunResponse extends SpeakeasyBase {
    concurrentRunsExceededException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    startMlLabelingSetGenerationTaskRunResponse?: shared.StartMlLabelingSetGenerationTaskRunResponse;
    statusCode: number;
}
