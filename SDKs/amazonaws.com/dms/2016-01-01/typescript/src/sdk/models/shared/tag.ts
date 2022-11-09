import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * <p>A user-defined key-value pair that describes metadata added to an DMS resource and that is used by operations such as the following:</p> <ul> <li> <p> <code>AddTagsToResource</code> </p> </li> <li> <p> <code>ListTagsForResource</code> </p> </li> <li> <p> <code>RemoveTagsFromResource</code> </p> </li> </ul>
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
