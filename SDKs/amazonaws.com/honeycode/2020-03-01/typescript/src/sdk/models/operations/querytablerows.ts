import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QueryTableRowsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tableId" })
  tableId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workbookId" })
  workbookId: string;
}


export class QueryTableRowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class QueryTableRowsHeaders extends SpeakeasyBase {
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


// QueryTableRowsRequestBodyFilterFormula
/** 
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
**/
export class QueryTableRowsRequestBodyFilterFormula extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextRowId" })
  contextRowId?: string;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;
}


export class QueryTableRowsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterFormula" })
  filterFormula: QueryTableRowsRequestBodyFilterFormula;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class QueryTableRowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QueryTableRowsPathParams;

  @SpeakeasyMetadata()
  queryParams: QueryTableRowsQueryParams;

  @SpeakeasyMetadata()
  headers: QueryTableRowsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: QueryTableRowsRequestBody;
}


export class QueryTableRowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  queryTableRowsResult?: shared.QueryTableRowsResult;

  @SpeakeasyMetadata()
  requestTimeoutException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
