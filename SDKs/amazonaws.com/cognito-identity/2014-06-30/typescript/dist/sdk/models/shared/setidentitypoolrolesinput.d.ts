import { SpeakeasyBase } from "../../../internal/utils";
import { RoleMapping } from "./rolemapping";
/**
 * Input to the <code>SetIdentityPoolRoles</code> action.
**/
export declare class SetIdentityPoolRolesInput extends SpeakeasyBase {
    identityPoolId: string;
    roleMappings?: Map<string, RoleMapping>;
    roles: Map<string, string>;
}
