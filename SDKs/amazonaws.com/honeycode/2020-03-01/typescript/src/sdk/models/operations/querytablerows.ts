import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QueryTableRowsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tableId" })
  tableId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workbookId" })
  workbookId: string;
}


export class QueryTableRowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class QueryTableRowsHeaders extends SpeakeasyBase {
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


// QueryTableRowsRequestBodyFilterFormula
/** 
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate. 
**/
export class QueryTableRowsRequestBodyFilterFormula extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextRowId" })
  contextRowId?: string;

  @Metadata({ data: "json, name=formula" })
  formula?: string;
}


export class QueryTableRowsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterFormula" })
  filterFormula: QueryTableRowsRequestBodyFilterFormula;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class QueryTableRowsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QueryTableRowsPathParams;

  @Metadata()
  queryParams: QueryTableRowsQueryParams;

  @Metadata()
  headers: QueryTableRowsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: QueryTableRowsRequestBody;
}


export class QueryTableRowsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  queryTableRowsResult?: shared.QueryTableRowsResult;

  @Metadata()
  requestTimeoutException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
