import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagListEntry } from "./taglistentry";


// TagResourceRequest
/** 
 * TagResourceRequest
**/
export class TagResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.TagListEntry })
  tags: TagListEntry[];
}
