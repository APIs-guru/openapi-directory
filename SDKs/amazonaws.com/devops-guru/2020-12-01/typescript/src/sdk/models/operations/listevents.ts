import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListEventsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// ListEventsRequestBodyFilters
/** 
 *  Filters you can use to specify which events are returned when <code>ListEvents</code> is called. 
**/
export class ListEventsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource?: shared.EventDataSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=EventClass" })
  eventClass?: shared.EventClassEnum;

  @SpeakeasyMetadata({ data: "json, name=EventSource" })
  eventSource?: string;

  @SpeakeasyMetadata({ data: "json, name=EventTimeRange" })
  eventTimeRange?: shared.EventTimeRange;

  @SpeakeasyMetadata({ data: "json, name=InsightId" })
  insightId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: shared.ResourceCollection;
}


export class ListEventsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters: ListEventsRequestBodyFilters;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}


export class ListEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListEventsQueryParams;

  @SpeakeasyMetadata()
  headers: ListEventsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListEventsRequestBody;
}


export class ListEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listEventsResponse?: shared.ListEventsResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
