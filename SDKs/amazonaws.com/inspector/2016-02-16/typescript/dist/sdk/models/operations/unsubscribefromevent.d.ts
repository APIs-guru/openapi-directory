import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UnsubscribeFromEventXAmzTargetEnum {
    InspectorServiceUnsubscribeFromEvent = "InspectorService.UnsubscribeFromEvent"
}
export declare class UnsubscribeFromEventHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnsubscribeFromEventXAmzTargetEnum;
}
export declare class UnsubscribeFromEventRequest extends SpeakeasyBase {
    headers: UnsubscribeFromEventHeaders;
    request: shared.UnsubscribeFromEventRequest;
}
export declare class UnsubscribeFromEventResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    noSuchEntityException?: any;
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
}
