import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCloseAccountHolderSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
