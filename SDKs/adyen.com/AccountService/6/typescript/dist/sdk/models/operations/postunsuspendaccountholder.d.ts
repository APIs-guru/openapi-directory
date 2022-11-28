import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUnSuspendAccountHolderSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
