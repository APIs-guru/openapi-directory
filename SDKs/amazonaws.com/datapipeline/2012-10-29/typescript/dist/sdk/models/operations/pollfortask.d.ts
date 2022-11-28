import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PollForTaskXAmzTargetEnum {
    DataPipelinePollForTask = "DataPipeline.PollForTask"
}
export declare class PollForTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForTaskXAmzTargetEnum;
}
export declare class PollForTaskRequest extends SpeakeasyBase {
    headers: PollForTaskHeaders;
    request: shared.PollForTaskInput;
}
export declare class PollForTaskResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    pollForTaskOutput?: shared.PollForTaskOutput;
    statusCode: number;
    taskNotFoundException?: any;
}
