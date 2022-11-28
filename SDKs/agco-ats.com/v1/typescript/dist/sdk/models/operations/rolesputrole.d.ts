import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RolesPutRolePathParams extends SpeakeasyBase {
    id: number;
}
export declare class RolesPutRoleRequests extends SpeakeasyBase {
    apiModelsRole?: shared.ApiModelsRole;
    apiModelsRole1?: shared.ApiModelsRole;
    apiModelsRole2?: shared.ApiModelsRole;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class RolesPutRoleRequest extends SpeakeasyBase {
    pathParams: RolesPutRolePathParams;
    request: RolesPutRoleRequests;
}
export declare class RolesPutRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
