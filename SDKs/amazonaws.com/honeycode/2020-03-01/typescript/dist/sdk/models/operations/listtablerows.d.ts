import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTableRowsPathParams extends SpeakeasyBase {
    tableId: string;
    workbookId: string;
}
export declare class ListTableRowsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListTableRowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTableRowsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    rowIds?: string[];
}
export declare class ListTableRowsRequest extends SpeakeasyBase {
    pathParams: ListTableRowsPathParams;
    queryParams: ListTableRowsQueryParams;
    headers: ListTableRowsHeaders;
    request: ListTableRowsRequestBody;
}
export declare class ListTableRowsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listTableRowsResult?: shared.ListTableRowsResult;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
