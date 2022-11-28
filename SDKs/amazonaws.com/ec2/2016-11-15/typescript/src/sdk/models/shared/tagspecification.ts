import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";



// TagSpecification
/** 
 * The tags to apply to a resource when the resource is being created.
**/
export class TagSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
