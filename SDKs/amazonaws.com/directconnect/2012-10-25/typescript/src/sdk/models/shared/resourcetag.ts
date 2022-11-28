import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// ResourceTag
/** 
 * Information about a tag associated with an Direct Connect resource.
**/
export class ResourceTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
