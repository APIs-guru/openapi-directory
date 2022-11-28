import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartNextPendingJobExecutionPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class StartNextPendingJobExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartNextPendingJobExecutionRequestBody extends SpeakeasyBase {
    statusDetails?: Map<string, string>;
    stepTimeoutInMinutes?: number;
}
export declare class StartNextPendingJobExecutionRequest extends SpeakeasyBase {
    pathParams: StartNextPendingJobExecutionPathParams;
    headers: StartNextPendingJobExecutionHeaders;
    request: StartNextPendingJobExecutionRequestBody;
}
export declare class StartNextPendingJobExecutionResponse extends SpeakeasyBase {
    certificateValidationException?: any;
    contentType: string;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    startNextPendingJobExecutionResponse?: shared.StartNextPendingJobExecutionResponse;
    statusCode: number;
    throttlingException?: any;
}
