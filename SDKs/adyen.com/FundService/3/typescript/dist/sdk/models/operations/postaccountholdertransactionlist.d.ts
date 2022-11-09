import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAccountHolderTransactionListSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostAccountHolderTransactionListSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostAccountHolderTransactionListSecurity extends SpeakeasyBase {
    option1?: PostAccountHolderTransactionListSecurityOption1;
    option2?: PostAccountHolderTransactionListSecurityOption2;
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
