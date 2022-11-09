import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostDisableSecurityOption1 extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostDisableSecurityOption2 extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class PostDisableSecurity extends SpeakeasyBase {
    option1?: PostDisableSecurityOption1;
    option2?: PostDisableSecurityOption2;
}
export declare class PostDisableRequest extends SpeakeasyBase {
    request?: any;
    security: PostDisableSecurity;
}
export declare class PostDisableResponse extends SpeakeasyBase {
    contentType: string;
    disableResult?: any;
    serviceError?: any;
    statusCode: number;
}
