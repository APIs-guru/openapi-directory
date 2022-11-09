import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchInsightsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class SearchInsightsHeaders extends SpeakeasyBase {
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


// SearchInsightsRequestBodyFilters
/** 
 *  Specifies one or more severity values and one or more status values that are used to search for insights. 
**/
export class SearchInsightsRequestBodyFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: shared.ResourceCollection;

  @Metadata({ data: "json, name=ServiceCollection" })
  serviceCollection?: shared.ServiceCollection;

  @Metadata({ data: "json, name=Severities" })
  severities?: shared.InsightSeverityEnum[];

  @Metadata({ data: "json, name=Statuses" })
  statuses?: shared.InsightStatusEnum[];
}


// SearchInsightsRequestBodyStartTimeRange
/** 
 *  A time range used to specify when the behavior of an insight or anomaly started. 
**/
export class SearchInsightsRequestBodyStartTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromTime" })
  fromTime?: Date;

  @Metadata({ data: "json, name=ToTime" })
  toTime?: Date;
}

export enum SearchInsightsRequestBodyTypeEnum {
    Reactive = "REACTIVE"
,    Proactive = "PROACTIVE"
}


export class SearchInsightsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters" })
  filters?: SearchInsightsRequestBodyFilters;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StartTimeRange" })
  startTimeRange: SearchInsightsRequestBodyStartTimeRange;

  @Metadata({ data: "json, name=Type" })
  type: SearchInsightsRequestBodyTypeEnum;
}


export class SearchInsightsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchInsightsQueryParams;

  @Metadata()
  headers: SearchInsightsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SearchInsightsRequestBody;
}


export class SearchInsightsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  searchInsightsResponse?: shared.SearchInsightsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
