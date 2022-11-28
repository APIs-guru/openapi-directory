import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDeleteBankAccountsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
