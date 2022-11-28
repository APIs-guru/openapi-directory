import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchUpdateTableRowsPathParams extends SpeakeasyBase {
    tableId: string;
    workbookId: string;
}
export declare class BatchUpdateTableRowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchUpdateTableRowsRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    rowsToUpdate: shared.UpdateRowData[];
}
export declare class BatchUpdateTableRowsRequest extends SpeakeasyBase {
    pathParams: BatchUpdateTableRowsPathParams;
    headers: BatchUpdateTableRowsHeaders;
    request: BatchUpdateTableRowsRequestBody;
}
export declare class BatchUpdateTableRowsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchUpdateTableRowsResult?: shared.BatchUpdateTableRowsResult;
    contentType: string;
    internalServerException?: any;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
