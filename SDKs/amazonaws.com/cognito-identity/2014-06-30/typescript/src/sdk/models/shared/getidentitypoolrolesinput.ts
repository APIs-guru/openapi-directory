import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetIdentityPoolRolesInput
/** 
 * Input to the <code>GetIdentityPoolRoles</code> action.
**/
export class GetIdentityPoolRolesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;
}
