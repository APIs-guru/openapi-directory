import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSuspendAccountHolderSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
