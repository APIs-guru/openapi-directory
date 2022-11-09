import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PatchAppsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchAppsIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PatchAppsIdRequest extends SpeakeasyBase {
    pathParams: PatchAppsIdPathParams;
    request?: shared.AppPatch;
    security: PatchAppsIdSecurity;
}
export declare class PatchAppsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appResponse?: shared.AppResponse;
    error?: shared.Error;
}
