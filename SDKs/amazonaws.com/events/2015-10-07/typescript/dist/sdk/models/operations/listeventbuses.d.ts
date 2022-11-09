import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListEventBusesXAmzTargetEnum {
    AwsEventsListEventBuses = "AWSEvents.ListEventBuses"
}
export declare class ListEventBusesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEventBusesXAmzTargetEnum;
}
export declare class ListEventBusesRequest extends SpeakeasyBase {
    headers: ListEventBusesHeaders;
    request: shared.ListEventBusesRequest;
}
export declare class ListEventBusesResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listEventBusesResponse?: shared.ListEventBusesResponse;
    statusCode: number;
}
