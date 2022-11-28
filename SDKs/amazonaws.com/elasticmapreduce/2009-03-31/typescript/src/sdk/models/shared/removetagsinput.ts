import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveTagsInput
/** 
 * This input identifies an Amazon EMR resource and a list of tags to remove.
**/
export class RemoveTagsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
