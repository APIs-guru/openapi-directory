import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostCloseStoresSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostCloseStoresSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostCloseStoresSecurity extends SpeakeasyBase {
    option1?: PostCloseStoresSecurityOption1;
    option2?: PostCloseStoresSecurityOption2;
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
