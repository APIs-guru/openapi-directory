import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCreateAccountHolderSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostCreateAccountHolderSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostCreateAccountHolderSecurity extends SpeakeasyBase {
    option1?: PostCreateAccountHolderSecurityOption1;
    option2?: PostCreateAccountHolderSecurityOption2;
}
export declare class PostCreateAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostCreateAccountHolderSecurity;
}
export declare class PostCreateAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    createAccountHolderResponse?: any;
    serviceError?: any;
    statusCode: number;
}
