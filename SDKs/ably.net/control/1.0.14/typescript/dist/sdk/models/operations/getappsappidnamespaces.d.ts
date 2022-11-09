import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAppsAppIdNamespacesPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class GetAppsAppIdNamespacesSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAppsAppIdNamespacesRequest extends SpeakeasyBase {
    pathParams: GetAppsAppIdNamespacesPathParams;
    security: GetAppsAppIdNamespacesSecurity;
}
export declare class GetAppsAppIdNamespacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    namespaceResponses?: shared.NamespaceResponse[];
}
