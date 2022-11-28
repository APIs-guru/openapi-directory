import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAnomaliesForInsightPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InsightId" })
  insightId: string;
}


export class ListAnomaliesForInsightQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListAnomaliesForInsightHeaders extends SpeakeasyBase {
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


// ListAnomaliesForInsightRequestBodyStartTimeRange
/** 
 *  A time range used to specify when the behavior of an insight or anomaly started. 
**/
export class ListAnomaliesForInsightRequestBodyStartTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromTime" })
  fromTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ToTime" })
  toTime?: Date;
}


export class ListAnomaliesForInsightRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTimeRange" })
  startTimeRange?: ListAnomaliesForInsightRequestBodyStartTimeRange;
}


export class ListAnomaliesForInsightRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListAnomaliesForInsightPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAnomaliesForInsightQueryParams;

  @SpeakeasyMetadata()
  headers: ListAnomaliesForInsightHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ListAnomaliesForInsightRequestBody;
}


export class ListAnomaliesForInsightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listAnomaliesForInsightResponse?: shared.ListAnomaliesForInsightResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
