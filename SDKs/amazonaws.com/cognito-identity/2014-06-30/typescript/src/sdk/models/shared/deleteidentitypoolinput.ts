import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteIdentityPoolInput
/** 
 * Input to the DeleteIdentityPool action.
**/
export class DeleteIdentityPoolInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;
}
