import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCloseAccountHolderSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostCloseAccountHolderSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostCloseAccountHolderSecurity extends SpeakeasyBase {
    option1?: PostCloseAccountHolderSecurityOption1;
    option2?: PostCloseAccountHolderSecurityOption2;
}
export declare class PostCloseAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostCloseAccountHolderSecurity;
}
export declare class PostCloseAccountHolderResponse extends SpeakeasyBase {
    closeAccountHolderResponse?: any;
    contentType: string;
    serviceError?: any;
    statusCode: number;
}
