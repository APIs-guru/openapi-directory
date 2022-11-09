import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchCreateTableRowsPathParams extends SpeakeasyBase {
    tableId: string;
    workbookId: string;
}
export declare class BatchCreateTableRowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchCreateTableRowsRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    rowsToCreate: shared.CreateRowData[];
}
export declare class BatchCreateTableRowsRequest extends SpeakeasyBase {
    pathParams: BatchCreateTableRowsPathParams;
    headers: BatchCreateTableRowsHeaders;
    request: BatchCreateTableRowsRequestBody;
}
export declare class BatchCreateTableRowsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchCreateTableRowsResult?: shared.BatchCreateTableRowsResult;
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
