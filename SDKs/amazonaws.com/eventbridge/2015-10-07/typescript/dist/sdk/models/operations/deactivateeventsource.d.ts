import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeactivateEventSourceXAmzTargetEnum {
    AwsEventsDeactivateEventSource = "AWSEvents.DeactivateEventSource"
}
export declare class DeactivateEventSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeactivateEventSourceXAmzTargetEnum;
}
export declare class DeactivateEventSourceRequest extends SpeakeasyBase {
    headers: DeactivateEventSourceHeaders;
    request: shared.DeactivateEventSourceRequest;
}
export declare class DeactivateEventSourceResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    internalException?: any;
    invalidStateException?: any;
    operationDisabledException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
