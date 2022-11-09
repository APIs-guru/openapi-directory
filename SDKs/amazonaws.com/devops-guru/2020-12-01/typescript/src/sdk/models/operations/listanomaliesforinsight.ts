import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAnomaliesForInsightPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=InsightId" })
  insightId: string;
}


export class ListAnomaliesForInsightQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListAnomaliesForInsightHeaders extends SpeakeasyBase {
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


// ListAnomaliesForInsightRequestBodyStartTimeRange
/** 
 *  A time range used to specify when the behavior of an insight or anomaly started. 
**/
export class ListAnomaliesForInsightRequestBodyStartTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromTime" })
  fromTime?: Date;

  @Metadata({ data: "json, name=ToTime" })
  toTime?: Date;
}


export class ListAnomaliesForInsightRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StartTimeRange" })
  startTimeRange?: ListAnomaliesForInsightRequestBodyStartTimeRange;
}


export class ListAnomaliesForInsightRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListAnomaliesForInsightPathParams;

  @Metadata()
  queryParams: ListAnomaliesForInsightQueryParams;

  @Metadata()
  headers: ListAnomaliesForInsightHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListAnomaliesForInsightRequestBody;
}


export class ListAnomaliesForInsightResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listAnomaliesForInsightResponse?: shared.ListAnomaliesForInsightResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
