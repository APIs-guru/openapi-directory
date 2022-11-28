import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroup } from "./keygroup";



// KeyGroupSummary
/** 
 * Contains information about a key group.
**/
export class KeyGroupSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  keyGroup: KeyGroup;
}
