import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartTriggerXAmzTargetEnum {
    AwsGlueStartTrigger = "AWSGlue.StartTrigger"
}
export declare class StartTriggerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTriggerXAmzTargetEnum;
}
export declare class StartTriggerRequest extends SpeakeasyBase {
    headers: StartTriggerHeaders;
    request: shared.StartTriggerRequest;
}
export declare class StartTriggerResponse extends SpeakeasyBase {
    concurrentRunsExceededException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    startTriggerResponse?: shared.StartTriggerResponse;
    statusCode: number;
}
