import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAppsIdPkcs12PathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostAppsIdPkcs12Security extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostAppsIdPkcs12Request extends SpeakeasyBase {
    pathParams: PostAppsIdPkcs12PathParams;
    request?: shared.AppPkcs12;
    security: PostAppsIdPkcs12Security;
}
export declare class PostAppsIdPkcs12Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    appResponse?: shared.AppResponse;
    error?: shared.Error;
}
