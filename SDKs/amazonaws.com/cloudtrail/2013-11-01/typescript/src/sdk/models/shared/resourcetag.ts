import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// ResourceTag
/** 
 * A resource tag.
**/
export class ResourceTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=TagsList", elemType: shared.Tag })
  tagsList?: Tag[];
}
