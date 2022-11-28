import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopTriggerXAmzTargetEnum {
    AwsGlueStopTrigger = "AWSGlue.StopTrigger"
}
export declare class StopTriggerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTriggerXAmzTargetEnum;
}
export declare class StopTriggerRequest extends SpeakeasyBase {
    headers: StopTriggerHeaders;
    request: shared.StopTriggerRequest;
}
export declare class StopTriggerResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    stopTriggerResponse?: shared.StopTriggerResponse;
}
