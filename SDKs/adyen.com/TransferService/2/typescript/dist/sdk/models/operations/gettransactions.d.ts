import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsQueryParams extends SpeakeasyBase {
    accountHolderId?: string;
    balanceAccountId?: string;
    balancePlatform?: string;
    createdSince?: Date;
    createdUntil?: Date;
    cursor?: string;
    limit?: number;
}
export declare class GetTransactionsSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    queryParams: GetTransactionsQueryParams;
    security: GetTransactionsSecurity;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    restServiceError?: any;
    statusCode: number;
    transactionSearchResponse?: any;
}
