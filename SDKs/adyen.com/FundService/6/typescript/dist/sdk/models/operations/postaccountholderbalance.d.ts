import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAccountHolderBalanceSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostAccountHolderBalanceSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostAccountHolderBalanceSecurity extends SpeakeasyBase {
    option1?: PostAccountHolderBalanceSecurityOption1;
    option2?: PostAccountHolderBalanceSecurityOption2;
}
export declare class PostAccountHolderBalanceRequest extends SpeakeasyBase {
    request?: any;
    security: PostAccountHolderBalanceSecurity;
}
export declare class PostAccountHolderBalanceResponse extends SpeakeasyBase {
    accountHolderBalanceResponse?: any;
    contentType: string;
    serviceError?: any;
    statusCode: number;
}
