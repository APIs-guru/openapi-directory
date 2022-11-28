import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCreateAccountHolderSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
