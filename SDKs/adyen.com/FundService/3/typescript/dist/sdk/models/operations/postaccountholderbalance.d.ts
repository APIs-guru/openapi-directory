import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountHolderBalanceSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
