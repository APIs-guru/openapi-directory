import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCloseStoresSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostCloseStoresRequest extends SpeakeasyBase {
    request?: any;
    security: PostCloseStoresSecurity;
}
export declare class PostCloseStoresResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: any;
    serviceError?: any;
    statusCode: number;
}
