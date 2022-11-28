import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// Tags
/** 
 *  A complex type that contains zero or more <code>Tag</code> elements.
**/
export class Tags extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Tag })
  items?: Tag[];
}
