import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoleMapping } from "./rolemapping";


// GetIdentityPoolRolesResponse
/** 
 * Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.
**/
export class GetIdentityPoolRolesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @Metadata({ data: "json, name=RoleMappings", elemType: shared.RoleMapping })
  roleMappings?: Map<string, RoleMapping>;

  @Metadata({ data: "json, name=Roles" })
  roles?: Map<string, string>;
}
