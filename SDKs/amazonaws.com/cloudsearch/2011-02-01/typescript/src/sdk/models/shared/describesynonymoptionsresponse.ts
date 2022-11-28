import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SynonymOptionsStatus } from "./synonymoptionsstatus";



// DescribeSynonymOptionsResponse
/** 
 * A response message that contains the synonym options for a search domain.
**/
export class DescribeSynonymOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  synonyms: SynonymOptionsStatus;
}
