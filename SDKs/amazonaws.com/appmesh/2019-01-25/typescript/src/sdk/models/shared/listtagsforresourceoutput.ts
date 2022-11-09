import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagRef } from "./tagref";


// ListTagsForResourceOutput
/** 
 * <zonbook></zonbook><xhtml></xhtml>
**/
export class ListTagsForResourceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.TagRef })
  tags: TagRef[];
}
