import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAppsAppIdKeysKeyIdRevokePathParams extends SpeakeasyBase {
    appId: string;
    keyId: string;
}
export declare class PostAppsAppIdKeysKeyIdRevokeSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostAppsAppIdKeysKeyIdRevokeRequest extends SpeakeasyBase {
    pathParams: PostAppsAppIdKeysKeyIdRevokePathParams;
    security: PostAppsAppIdKeysKeyIdRevokeSecurity;
}
export declare class PostAppsAppIdKeysKeyIdRevokeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
