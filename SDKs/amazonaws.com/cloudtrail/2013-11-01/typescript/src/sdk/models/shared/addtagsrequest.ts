import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// AddTagsRequest
/** 
 * Specifies the tags to add to a trail.
**/
export class AddTagsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=TagsList", elemType: shared.Tag })
  tagsList?: Tag[];
}
