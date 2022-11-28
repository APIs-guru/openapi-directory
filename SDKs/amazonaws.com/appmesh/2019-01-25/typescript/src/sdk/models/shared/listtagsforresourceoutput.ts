import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagRef } from "./tagref";



// ListTagsForResourceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class ListTagsForResourceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagRef })
  tags: TagRef[];
}
