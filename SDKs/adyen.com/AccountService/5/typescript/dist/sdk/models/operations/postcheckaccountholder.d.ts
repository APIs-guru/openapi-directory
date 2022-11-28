import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCheckAccountHolderSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostCheckAccountHolderRequest extends SpeakeasyBase {
    request?: any;
    security: PostCheckAccountHolderSecurity;
}
export declare class PostCheckAccountHolderResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: any;
    serviceError?: any;
    statusCode: number;
}
