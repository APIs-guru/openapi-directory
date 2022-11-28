import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// TagDescription
/** 
 * Describes a tag.
**/
export class TagDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  resourceId?: string;

  @SpeakeasyMetadata()
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata()
  value?: string;
}
