import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTriggerXAmzTargetEnum {
    AwsGlueUpdateTrigger = "AWSGlue.UpdateTrigger"
}
export declare class UpdateTriggerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTriggerXAmzTargetEnum;
}
export declare class UpdateTriggerRequest extends SpeakeasyBase {
    headers: UpdateTriggerHeaders;
    request: shared.UpdateTriggerRequest;
}
export declare class UpdateTriggerResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateTriggerResponse?: shared.UpdateTriggerResponse;
}
