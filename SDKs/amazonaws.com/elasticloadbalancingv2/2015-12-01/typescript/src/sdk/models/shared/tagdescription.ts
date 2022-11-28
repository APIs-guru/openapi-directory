import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// TagDescription
/** 
 * The tags associated with a resource.
**/
export class TagDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceArn?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
