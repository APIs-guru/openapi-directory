import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";



// LaunchTemplateTagSpecification
/** 
 * The tag specification for the launch template.
**/
export class LaunchTemplateTagSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
