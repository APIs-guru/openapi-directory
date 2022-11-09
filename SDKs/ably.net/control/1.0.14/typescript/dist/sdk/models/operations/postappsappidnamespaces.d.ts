import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAppsAppIdNamespacesPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class PostAppsAppIdNamespacesSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostAppsAppIdNamespacesRequest extends SpeakeasyBase {
    pathParams: PostAppsAppIdNamespacesPathParams;
    request?: shared.NamespacePost;
    security: PostAppsAppIdNamespacesSecurity;
}
export declare class PostAppsAppIdNamespacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    namespaceResponse?: shared.NamespaceResponse;
}
