import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchAppsAppIdKeysKeyIdPathParams extends SpeakeasyBase {
    appId: string;
    keyId: string;
}
export declare class PatchAppsAppIdKeysKeyIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PatchAppsAppIdKeysKeyIdRequest extends SpeakeasyBase {
    pathParams: PatchAppsAppIdKeysKeyIdPathParams;
    request?: shared.KeyPatch;
    security: PatchAppsAppIdKeysKeyIdSecurity;
}
export declare class PatchAppsAppIdKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    keyResponse?: shared.KeyResponse;
}
