import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostPayoutAccountHolderSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostPayoutAccountHolderSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostPayoutAccountHolderSecurity extends SpeakeasyBase {
    option1?: PostPayoutAccountHolderSecurityOption1;
    option2?: PostPayoutAccountHolderSecurityOption2;
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
