import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountHolderTransactionListSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostAccountHolderTransactionListRequest extends SpeakeasyBase {
    request?: any;
    security: PostAccountHolderTransactionListSecurity;
}
export declare class PostAccountHolderTransactionListResponse extends SpeakeasyBase {
    accountHolderTransactionListResponse?: any;
    contentType: string;
    serviceError?: any;
    statusCode: number;
}
