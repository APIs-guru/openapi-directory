import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QueryTableRowsPathParams extends SpeakeasyBase {
    tableId: string;
    workbookId: string;
}
export declare class QueryTableRowsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class QueryTableRowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.
**/
export declare class QueryTableRowsRequestBodyFilterFormula extends SpeakeasyBase {
    contextRowId?: string;
    formula?: string;
}
export declare class QueryTableRowsRequestBody extends SpeakeasyBase {
    filterFormula: QueryTableRowsRequestBodyFilterFormula;
    maxResults?: number;
    nextToken?: string;
}
export declare class QueryTableRowsRequest extends SpeakeasyBase {
    pathParams: QueryTableRowsPathParams;
    queryParams: QueryTableRowsQueryParams;
    headers: QueryTableRowsHeaders;
    request: QueryTableRowsRequestBody;
}
export declare class QueryTableRowsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    queryTableRowsResult?: shared.QueryTableRowsResult;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
