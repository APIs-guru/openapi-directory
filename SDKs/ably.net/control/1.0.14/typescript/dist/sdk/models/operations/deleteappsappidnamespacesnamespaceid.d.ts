import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteAppsAppIdNamespacesNamespaceIdPathParams extends SpeakeasyBase {
    appId: string;
    namespaceId: string;
}
export declare class DeleteAppsAppIdNamespacesNamespaceIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteAppsAppIdNamespacesNamespaceIdRequest extends SpeakeasyBase {
    pathParams: DeleteAppsAppIdNamespacesNamespaceIdPathParams;
    security: DeleteAppsAppIdNamespacesNamespaceIdSecurity;
}
export declare class DeleteAppsAppIdNamespacesNamespaceIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
}
