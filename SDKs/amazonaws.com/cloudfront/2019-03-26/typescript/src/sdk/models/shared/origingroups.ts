import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginGroup } from "./origingroup";



// OriginGroups
/** 
 * A complex data type for the origin groups specified for a distribution.
**/
export class OriginGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginGroup })
  items?: OriginGroup[];

  @SpeakeasyMetadata()
  quantity: number;
}
