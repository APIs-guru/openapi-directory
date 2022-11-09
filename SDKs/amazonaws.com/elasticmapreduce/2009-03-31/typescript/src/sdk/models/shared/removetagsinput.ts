import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveTagsInput
/** 
 * This input identifies an Amazon EMR resource and a list of tags to remove.
**/
export class RemoveTagsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
