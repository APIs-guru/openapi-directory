import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SubscribeToEventXAmzTargetEnum {
    InspectorServiceSubscribeToEvent = "InspectorService.SubscribeToEvent"
}
export declare class SubscribeToEventHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SubscribeToEventXAmzTargetEnum;
}
export declare class SubscribeToEventRequest extends SpeakeasyBase {
    headers: SubscribeToEventHeaders;
    request: shared.SubscribeToEventRequest;
}
export declare class SubscribeToEventResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
