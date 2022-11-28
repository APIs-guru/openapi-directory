import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Origin } from "./origin";



// Origins
/** 
 * A complex type that contains information about origins and origin groups for this distribution. 
**/
export class Origins extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Origin })
  items: Origin[];

  @SpeakeasyMetadata()
  quantity: number;
}
