import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCloseAccountSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostCloseAccountRequest extends SpeakeasyBase {
    request?: any;
    security: PostCloseAccountSecurity;
}
export declare class PostCloseAccountResponse extends SpeakeasyBase {
    closeAccountResponse?: any;
    contentType: string;
    serviceError?: any;
    statusCode: number;
}
