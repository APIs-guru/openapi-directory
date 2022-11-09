import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostDeleteSignatoriesSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostDeleteSignatoriesSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostDeleteSignatoriesSecurity extends SpeakeasyBase {
    option1?: PostDeleteSignatoriesSecurityOption1;
    option2?: PostDeleteSignatoriesSecurityOption2;
}
export declare class PostDeleteSignatoriesRequest extends SpeakeasyBase {
    request?: any;
    security: PostDeleteSignatoriesSecurity;
}
export declare class PostDeleteSignatoriesResponse extends SpeakeasyBase {
    contentType: string;
    genericResponse?: any;
    serviceError?: any;
    statusCode: number;
}
