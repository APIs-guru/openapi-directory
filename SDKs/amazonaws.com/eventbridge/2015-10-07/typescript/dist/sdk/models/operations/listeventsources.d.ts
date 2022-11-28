import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListEventSourcesXAmzTargetEnum {
    AwsEventsListEventSources = "AWSEvents.ListEventSources"
}
export declare class ListEventSourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEventSourcesXAmzTargetEnum;
}
export declare class ListEventSourcesRequest extends SpeakeasyBase {
    headers: ListEventSourcesHeaders;
    request: shared.ListEventSourcesRequest;
}
export declare class ListEventSourcesResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    listEventSourcesResponse?: shared.ListEventSourcesResponse;
    operationDisabledException?: any;
    statusCode: number;
}
