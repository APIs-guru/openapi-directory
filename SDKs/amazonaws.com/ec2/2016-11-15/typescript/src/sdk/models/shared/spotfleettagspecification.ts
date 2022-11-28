import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";



// SpotFleetTagSpecification
/** 
 * The tags for a Spot Fleet resource.
**/
export class SpotFleetTagSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
