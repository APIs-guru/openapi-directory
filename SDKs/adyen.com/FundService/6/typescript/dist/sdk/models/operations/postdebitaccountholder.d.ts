import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostDebitAccountHolderSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostDebitAccountHolderSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostDebitAccountHolderSecurity extends SpeakeasyBase {
    option1?: PostDebitAccountHolderSecurityOption1;
    option2?: PostDebitAccountHolderSecurityOption2;
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
