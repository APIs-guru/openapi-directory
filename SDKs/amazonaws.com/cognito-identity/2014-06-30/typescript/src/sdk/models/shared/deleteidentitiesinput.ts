import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteIdentitiesInput
/** 
 * Input to the <code>DeleteIdentities</code> action.
**/
export class DeleteIdentitiesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityIdsToDelete" })
  identityIdsToDelete: string[];
}
