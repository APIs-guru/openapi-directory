import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCreateAccountSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostCreateAccountSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostCreateAccountSecurity extends SpeakeasyBase {
    option1?: PostCreateAccountSecurityOption1;
    option2?: PostCreateAccountSecurityOption2;
}
export declare class PostCreateAccountRequest extends SpeakeasyBase {
    request?: any;
    security: PostCreateAccountSecurity;
}
export declare class PostCreateAccountResponse extends SpeakeasyBase {
    contentType: string;
    createAccountResponse?: any;
    serviceError?: any;
    statusCode: number;
}
