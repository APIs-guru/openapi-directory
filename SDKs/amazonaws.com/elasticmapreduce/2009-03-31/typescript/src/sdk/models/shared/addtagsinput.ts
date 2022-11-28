import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// AddTagsInput
/** 
 * This input identifies an Amazon EMR resource and a list of tags to attach.
**/
export class AddTagsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags: Tag[];
}
