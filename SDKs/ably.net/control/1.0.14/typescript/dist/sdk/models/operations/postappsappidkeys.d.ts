import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAppsAppIdKeysPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class PostAppsAppIdKeysSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostAppsAppIdKeysRequest extends SpeakeasyBase {
    pathParams: PostAppsAppIdKeysPathParams;
    request?: shared.KeyPost;
    security: PostAppsAppIdKeysSecurity;
}
export declare class PostAppsAppIdKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    keyResponse?: shared.KeyResponse;
}
