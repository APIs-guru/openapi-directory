import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreateAccountSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
