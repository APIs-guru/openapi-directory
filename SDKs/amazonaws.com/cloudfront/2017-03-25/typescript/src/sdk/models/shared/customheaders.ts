import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginCustomHeader } from "./origincustomheader";



// CustomHeaders
/** 
 * A complex type that contains the list of Custom Headers for each origin. 
**/
export class CustomHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginCustomHeader })
  items?: OriginCustomHeader[];

  @SpeakeasyMetadata()
  quantity: number;
}
