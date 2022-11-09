import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveTagsFromResourceMessage
/** 
 * Removes one or more tags from an DMS resource.
**/
export class RemoveTagsFromResourceMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
