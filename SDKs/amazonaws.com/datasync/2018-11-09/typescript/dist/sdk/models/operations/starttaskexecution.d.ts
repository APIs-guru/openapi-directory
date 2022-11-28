import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartTaskExecutionXAmzTargetEnum {
    FmrsServiceStartTaskExecution = "FmrsService.StartTaskExecution"
}
export declare class StartTaskExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTaskExecutionXAmzTargetEnum;
}
export declare class StartTaskExecutionRequest extends SpeakeasyBase {
    headers: StartTaskExecutionHeaders;
    request: shared.StartTaskExecutionRequest;
}
export declare class StartTaskExecutionResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    startTaskExecutionResponse?: shared.StartTaskExecutionResponse;
    statusCode: number;
}
