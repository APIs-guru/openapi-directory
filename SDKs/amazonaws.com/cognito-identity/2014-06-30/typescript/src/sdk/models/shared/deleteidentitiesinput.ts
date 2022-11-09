import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteIdentitiesInput
/** 
 * Input to the <code>DeleteIdentities</code> action.
**/
export class DeleteIdentitiesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityIdsToDelete" })
  identityIdsToDelete: string[];
}
