import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelTaskExecutionXAmzTargetEnum {
    FmrsServiceCancelTaskExecution = "FmrsService.CancelTaskExecution"
}
export declare class CancelTaskExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelTaskExecutionXAmzTargetEnum;
}
export declare class CancelTaskExecutionRequest extends SpeakeasyBase {
    headers: CancelTaskExecutionHeaders;
    request: shared.CancelTaskExecutionRequest;
}
export declare class CancelTaskExecutionResponse extends SpeakeasyBase {
    cancelTaskExecutionResponse?: Map<string, any>;
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    statusCode: number;
}
