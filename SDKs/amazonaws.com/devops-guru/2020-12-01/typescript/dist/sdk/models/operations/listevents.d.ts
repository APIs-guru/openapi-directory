import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEventsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  Filters you can use to specify which events are returned when <code>ListEvents</code> is called.
**/
export declare class ListEventsRequestBodyFilters extends SpeakeasyBase {
    dataSource?: shared.EventDataSourceEnum;
    eventClass?: shared.EventClassEnum;
    eventSource?: string;
    eventTimeRange?: shared.EventTimeRange;
    insightId?: string;
    resourceCollection?: shared.ResourceCollection;
}
export declare class ListEventsRequestBody extends SpeakeasyBase {
    filters: ListEventsRequestBodyFilters;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListEventsRequest extends SpeakeasyBase {
    queryParams: ListEventsQueryParams;
    headers: ListEventsHeaders;
    request: ListEventsRequestBody;
}
export declare class ListEventsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listEventsResponse?: shared.ListEventsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
