import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ActivateEventSourceXAmzTargetEnum {
    AwsEventsActivateEventSource = "AWSEvents.ActivateEventSource"
}
export declare class ActivateEventSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ActivateEventSourceXAmzTargetEnum;
}
export declare class ActivateEventSourceRequest extends SpeakeasyBase {
    headers: ActivateEventSourceHeaders;
    request: shared.ActivateEventSourceRequest;
}
export declare class ActivateEventSourceResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    invalidStateException?: any;
    operationDisabledException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
