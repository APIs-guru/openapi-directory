import { SpeakeasyBase } from "../../../internal/utils";
import { RoleMapping } from "./rolemapping";
/**
 * Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.
**/
export declare class GetIdentityPoolRolesResponse extends SpeakeasyBase {
    identityPoolId?: string;
    roleMappings?: Map<string, RoleMapping>;
    roles?: Map<string, string>;
}
