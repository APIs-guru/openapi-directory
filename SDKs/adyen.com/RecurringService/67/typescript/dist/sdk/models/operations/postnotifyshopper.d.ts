import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostNotifyShopperSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostNotifyShopperRequest extends SpeakeasyBase {
    request?: any;
    security: PostNotifyShopperSecurity;
}
export declare class PostNotifyShopperResponse extends SpeakeasyBase {
    contentType: string;
    notifyShopperResult?: any;
    serviceError?: any;
    statusCode: number;
}
