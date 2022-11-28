import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroupSummary } from "./keygroupsummary";



// KeyGroupList
/** 
 * A list of key groups.
**/
export class KeyGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: KeyGroupSummary })
  items?: KeyGroupSummary[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
