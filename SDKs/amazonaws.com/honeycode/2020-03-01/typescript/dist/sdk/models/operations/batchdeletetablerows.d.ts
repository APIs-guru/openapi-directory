import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BatchDeleteTableRowsPathParams extends SpeakeasyBase {
    tableId: string;
    workbookId: string;
}
export declare class BatchDeleteTableRowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDeleteTableRowsRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    rowIds: string[];
}
export declare class BatchDeleteTableRowsRequest extends SpeakeasyBase {
    pathParams: BatchDeleteTableRowsPathParams;
    headers: BatchDeleteTableRowsHeaders;
    request: BatchDeleteTableRowsRequestBody;
}
export declare class BatchDeleteTableRowsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchDeleteTableRowsResult?: shared.BatchDeleteTableRowsResult;
    contentType: string;
    internalServerException?: any;
    requestTimeoutException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
