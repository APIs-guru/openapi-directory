import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteIdentityPoolInput
/** 
 * Input to the DeleteIdentityPool action.
**/
export class DeleteIdentityPoolInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;
}
