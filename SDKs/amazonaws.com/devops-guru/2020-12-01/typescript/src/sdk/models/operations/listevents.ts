import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListEventsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// ListEventsRequestBodyFilters
/** 
 *  Filters you can use to specify which events are returned when <code>ListEvents</code> is called. 
**/
export class ListEventsRequestBodyFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSource" })
  dataSource?: shared.EventDataSourceEnum;

  @Metadata({ data: "json, name=EventClass" })
  eventClass?: shared.EventClassEnum;

  @Metadata({ data: "json, name=EventSource" })
  eventSource?: string;

  @Metadata({ data: "json, name=EventTimeRange" })
  eventTimeRange?: shared.EventTimeRange;

  @Metadata({ data: "json, name=InsightId" })
  insightId?: string;

  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: shared.ResourceCollection;
}


export class ListEventsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters" })
  filters: ListEventsRequestBodyFilters;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}


export class ListEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEventsQueryParams;

  @Metadata()
  headers: ListEventsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListEventsRequestBody;
}


export class ListEventsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listEventsResponse?: shared.ListEventsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
