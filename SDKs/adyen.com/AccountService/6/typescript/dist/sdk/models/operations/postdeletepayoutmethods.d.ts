import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostDeletePayoutMethodsSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostDeletePayoutMethodsSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostDeletePayoutMethodsSecurity extends SpeakeasyBase {
    option1?: PostDeletePayoutMethodsSecurityOption1;
    option2?: PostDeletePayoutMethodsSecurityOption2;
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
