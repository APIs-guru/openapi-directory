import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostDeleteBankAccountsSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostDeleteBankAccountsSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostDeleteBankAccountsSecurity extends SpeakeasyBase {
    option1?: PostDeleteBankAccountsSecurityOption1;
    option2?: PostDeleteBankAccountsSecurityOption2;
}
export declare class PostDeleteBankAccountsRequest extends SpeakeasyBase {
    request?: any;
    security: PostDeleteBankAccountsSecurity;
}
export declare class PostDeleteBankAccountsResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: any;
    serviceError?: any;
    statusCode: number;
}
