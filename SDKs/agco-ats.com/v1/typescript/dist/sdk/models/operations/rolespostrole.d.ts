import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RolesPostRoleRequests extends SpeakeasyBase {
    apiModelsRole?: shared.ApiModelsRole;
    apiModelsRole1?: shared.ApiModelsRole;
    apiModelsRole2?: shared.ApiModelsRole;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class RolesPostRoleRequest extends SpeakeasyBase {
    request: RolesPostRoleRequests;
}
export declare class RolesPostRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    rolesPostRole200ApplicationJsonInt32Integer?: number;
    rolesPostRole200TextJsonInt32Integer?: number;
    statusCode: number;
}
