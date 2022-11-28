import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiModelsRolePermissionChangeActionEnum {
    Grant = "Grant",
    Revoke = "Revoke"
}
/**
 * Change to the Permissions that a Role is given.
**/
export declare class ApiModelsRolePermissionChange extends SpeakeasyBase {
    action: ApiModelsRolePermissionChangeActionEnum;
    permission: string;
}
