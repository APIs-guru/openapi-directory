import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// RemoveTagsRequest
/** 
 * Specifies the tags to remove from a trail.
**/
export class RemoveTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=TagsList", elemType: shared.Tag })
  tagsList?: Tag[];
}
