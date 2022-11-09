import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostUpdateAccountSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostUpdateAccountSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostUpdateAccountSecurity extends SpeakeasyBase {
    option1?: PostUpdateAccountSecurityOption1;
    option2?: PostUpdateAccountSecurityOption2;
}
export declare class PostUpdateAccountRequest extends SpeakeasyBase {
    request?: any;
    security: PostUpdateAccountSecurity;
}
export declare class PostUpdateAccountResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    updateAccountResponse?: any;
}
