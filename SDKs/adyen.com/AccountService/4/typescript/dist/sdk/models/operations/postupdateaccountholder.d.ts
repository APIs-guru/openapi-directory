import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostUpdateAccountHolderSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostUpdateAccountHolderSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostUpdateAccountHolderSecurity extends SpeakeasyBase {
    option1?: PostUpdateAccountHolderSecurityOption1;
    option2?: PostUpdateAccountHolderSecurityOption2;
}
export declare class PostUpdateAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostUpdateAccountHolderSecurity;
}
export declare class PostUpdateAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    updateAccountHolderResponse?: any;
}
