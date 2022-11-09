import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchUpsertTableRowsPathParams extends SpeakeasyBase {
    tableId: string;
    workbookId: string;
}
export declare class BatchUpsertTableRowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchUpsertTableRowsRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    rowsToUpsert: shared.UpsertRowData[];
}
export declare class BatchUpsertTableRowsRequest extends SpeakeasyBase {
    pathParams: BatchUpsertTableRowsPathParams;
    headers: BatchUpsertTableRowsHeaders;
    request: BatchUpsertTableRowsRequestBody;
}
export declare class BatchUpsertTableRowsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchUpsertTableRowsResult?: shared.BatchUpsertTableRowsResult;
    contentType: string;
    internalServerException?: any;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
