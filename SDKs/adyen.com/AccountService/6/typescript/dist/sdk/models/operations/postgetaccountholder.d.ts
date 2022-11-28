import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGetAccountHolderSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostGetAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostGetAccountHolderSecurity;
}
export declare class PostGetAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    getAccountHolderResponse?: any;
    serviceError?: any;
    statusCode: number;
}
