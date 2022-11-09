import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostNotifyShopperSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostNotifyShopperSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostNotifyShopperSecurity extends SpeakeasyBase {
    option1?: PostNotifyShopperSecurityOption1;
    option2?: PostNotifyShopperSecurityOption2;
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
