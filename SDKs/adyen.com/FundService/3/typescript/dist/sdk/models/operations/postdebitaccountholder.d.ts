import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDebitAccountHolderSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostDebitAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostDebitAccountHolderSecurity;
}
export declare class PostDebitAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    debitAccountHolderResponse?: any;
    serviceError?: any;
    statusCode: number;
}
