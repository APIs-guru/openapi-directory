import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveTagsFromResourceMessage
/** 
 * Removes one or more tags from an DMS resource.
**/
export class RemoveTagsFromResourceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}
