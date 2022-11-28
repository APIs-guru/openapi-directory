import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SynonymOptionsStatus } from "./synonymoptionsstatus";



// UpdateSynonymOptionsResponse
/** 
 * A response message that contains the status of updated synonym options.
**/
export class UpdateSynonymOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  synonyms: SynonymOptionsStatus;
}
