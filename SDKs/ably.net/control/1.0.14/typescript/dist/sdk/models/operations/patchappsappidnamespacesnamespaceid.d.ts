import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PatchAppsAppIdNamespacesNamespaceIdPathParams extends SpeakeasyBase {
    appId: string;
    namespaceId: string;
}
export declare class PatchAppsAppIdNamespacesNamespaceIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PatchAppsAppIdNamespacesNamespaceIdRequest extends SpeakeasyBase {
    pathParams: PatchAppsAppIdNamespacesNamespaceIdPathParams;
    request?: shared.NamespacePatch;
    security: PatchAppsAppIdNamespacesNamespaceIdSecurity;
}
export declare class PatchAppsAppIdNamespacesNamespaceIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    namespaceResponse?: shared.NamespaceResponse;
}
