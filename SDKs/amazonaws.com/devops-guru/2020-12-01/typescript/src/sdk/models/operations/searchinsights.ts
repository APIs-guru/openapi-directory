import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchInsightsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class SearchInsightsHeaders extends SpeakeasyBase {
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


// SearchInsightsRequestBodyFilters
/** 
 *  Specifies one or more severity values and one or more status values that are used to search for insights. 
**/
export class SearchInsightsRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: shared.ResourceCollection;

  @SpeakeasyMetadata({ data: "json, name=ServiceCollection" })
  serviceCollection?: shared.ServiceCollection;

  @SpeakeasyMetadata({ data: "json, name=Severities" })
  severities?: shared.InsightSeverityEnum[];

  @SpeakeasyMetadata({ data: "json, name=Statuses" })
  statuses?: shared.InsightStatusEnum[];
}


// SearchInsightsRequestBodyStartTimeRange
/** 
 *  A time range used to specify when the behavior of an insight or anomaly started. 
**/
export class SearchInsightsRequestBodyStartTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromTime" })
  fromTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ToTime" })
  toTime?: Date;
}

export enum SearchInsightsRequestBodyTypeEnum {
    Reactive = "REACTIVE",
    Proactive = "PROACTIVE"
}


export class SearchInsightsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: SearchInsightsRequestBodyFilters;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTimeRange" })
  startTimeRange: SearchInsightsRequestBodyStartTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: SearchInsightsRequestBodyTypeEnum;
}


export class SearchInsightsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchInsightsQueryParams;

  @SpeakeasyMetadata()
  headers: SearchInsightsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SearchInsightsRequestBody;
}


export class SearchInsightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  searchInsightsResponse?: shared.SearchInsightsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
