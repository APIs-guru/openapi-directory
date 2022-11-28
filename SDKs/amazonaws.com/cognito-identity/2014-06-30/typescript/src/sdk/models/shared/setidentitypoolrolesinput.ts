import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleMapping } from "./rolemapping";



// SetIdentityPoolRolesInput
/** 
 * Input to the <code>SetIdentityPoolRoles</code> action.
**/
export class SetIdentityPoolRolesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=RoleMappings", elemType: RoleMapping })
  roleMappings?: Map<string, RoleMapping>;

  @SpeakeasyMetadata({ data: "json, name=Roles" })
  roles: Map<string, string>;
}
