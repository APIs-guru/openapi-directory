import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleMapping } from "./rolemapping";



// GetIdentityPoolRolesResponse
/** 
 * Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.
**/
export class GetIdentityPoolRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleMappings", elemType: RoleMapping })
  roleMappings?: Map<string, RoleMapping>;

  @SpeakeasyMetadata({ data: "json, name=Roles" })
  roles?: Map<string, string>;
}
