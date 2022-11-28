import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Origin } from "./origin";



// Origins
/** 
 * Contains information about the origins for this distribution.
**/
export class Origins extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Origin })
  items: Origin[];

  @SpeakeasyMetadata()
  quantity: number;
}
