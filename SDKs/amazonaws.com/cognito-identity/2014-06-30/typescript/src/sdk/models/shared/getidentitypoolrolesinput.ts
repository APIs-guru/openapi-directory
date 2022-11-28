import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetIdentityPoolRolesInput
/** 
 * Input to the <code>GetIdentityPoolRoles</code> action.
**/
export class GetIdentityPoolRolesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;
}
