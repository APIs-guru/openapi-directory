import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUpdateAccountSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
