import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDeletePayoutMethodsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostDeletePayoutMethodsRequest extends SpeakeasyBase {
    request?: any;
    security: PostDeletePayoutMethodsSecurity;
}
export declare class PostDeletePayoutMethodsResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: any;
    serviceError?: any;
    statusCode: number;
}
