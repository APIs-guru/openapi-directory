import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoleMapping } from "./rolemapping";


// SetIdentityPoolRolesInput
/** 
 * Input to the <code>SetIdentityPoolRoles</code> action.
**/
export class SetIdentityPoolRolesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @Metadata({ data: "json, name=RoleMappings", elemType: shared.RoleMapping })
  roleMappings?: Map<string, RoleMapping>;

  @Metadata({ data: "json, name=Roles" })
  roles: Map<string, string>;
}
