import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCloseAccountSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostCloseAccountSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostCloseAccountSecurity extends SpeakeasyBase {
    option1?: PostCloseAccountSecurityOption1;
    option2?: PostCloseAccountSecurityOption2;
}
export declare class PostCloseAccountRequest extends SpeakeasyBase {
    request?: any;
    security: PostCloseAccountSecurity;
}
export declare class PostCloseAccountResponse extends SpeakeasyBase {
    closeAccountResponse?: any;
    contentType: string;
    serviceError?: any;
    statusCode: number;
}
