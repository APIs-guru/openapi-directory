import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateEventBusXAmzTargetEnum {
    AwsEventsCreateEventBus = "AWSEvents.CreateEventBus"
}
export declare class CreateEventBusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEventBusXAmzTargetEnum;
}
export declare class CreateEventBusRequest extends SpeakeasyBase {
    headers: CreateEventBusHeaders;
    request: shared.CreateEventBusRequest;
}
export declare class CreateEventBusResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createEventBusResponse?: shared.CreateEventBusResponse;
    internalException?: any;
    invalidStateException?: any;
    limitExceededException?: any;
    operationDisabledException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
