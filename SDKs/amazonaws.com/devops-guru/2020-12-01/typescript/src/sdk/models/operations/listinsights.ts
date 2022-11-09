import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListInsightsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}


export class ListInsightsHeaders extends SpeakeasyBase {
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


// ListInsightsRequestBodyStatusFilter
/** 
 *  A filter used by <code>ListInsights</code> to specify which insights to return. 
**/
export class ListInsightsRequestBodyStatusFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Any" })
  any?: shared.ListInsightsAnyStatusFilter;

  @Metadata({ data: "json, name=Closed" })
  closed?: shared.ListInsightsClosedStatusFilter;

  @Metadata({ data: "json, name=Ongoing" })
  ongoing?: shared.ListInsightsOngoingStatusFilter;
}


export class ListInsightsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StatusFilter" })
  statusFilter: ListInsightsRequestBodyStatusFilter;
}


export class ListInsightsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListInsightsQueryParams;

  @Metadata()
  headers: ListInsightsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ListInsightsRequestBody;
}


export class ListInsightsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listInsightsResponse?: shared.ListInsightsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
