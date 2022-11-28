import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDisableSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
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
