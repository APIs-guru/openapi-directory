import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPayoutAccountHolderSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostPayoutAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostPayoutAccountHolderSecurity;
}
export declare class PostPayoutAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    payoutAccountHolderResponse?: any;
    serviceError?: any;
    statusCode: number;
}
