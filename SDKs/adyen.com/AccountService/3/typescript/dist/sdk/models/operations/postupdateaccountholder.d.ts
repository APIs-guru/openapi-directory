import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUpdateAccountHolderSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
