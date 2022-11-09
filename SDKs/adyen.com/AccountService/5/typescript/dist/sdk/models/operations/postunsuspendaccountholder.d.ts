import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostUnSuspendAccountHolderSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostUnSuspendAccountHolderSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostUnSuspendAccountHolderSecurity extends SpeakeasyBase {
    option1?: PostUnSuspendAccountHolderSecurityOption1;
    option2?: PostUnSuspendAccountHolderSecurityOption2;
}
export declare class PostUnSuspendAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostUnSuspendAccountHolderSecurity;
}
export declare class PostUnSuspendAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    unSuspendAccountHolderResponse?: any;
}
