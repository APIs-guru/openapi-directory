import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostSuspendAccountHolderSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostSuspendAccountHolderSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostSuspendAccountHolderSecurity extends SpeakeasyBase {
    option1?: PostSuspendAccountHolderSecurityOption1;
    option2?: PostSuspendAccountHolderSecurityOption2;
}
export declare class PostSuspendAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostSuspendAccountHolderSecurity;
}
export declare class PostSuspendAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    suspendAccountHolderResponse?: any;
}
