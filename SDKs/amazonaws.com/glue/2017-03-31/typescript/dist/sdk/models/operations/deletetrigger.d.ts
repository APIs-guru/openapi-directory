import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTriggerXAmzTargetEnum {
    AwsGlueDeleteTrigger = "AWSGlue.DeleteTrigger"
}
export declare class DeleteTriggerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTriggerXAmzTargetEnum;
}
export declare class DeleteTriggerRequest extends SpeakeasyBase {
    headers: DeleteTriggerHeaders;
    request: shared.DeleteTriggerRequest;
}
export declare class DeleteTriggerResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteTriggerResponse?: shared.DeleteTriggerResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
