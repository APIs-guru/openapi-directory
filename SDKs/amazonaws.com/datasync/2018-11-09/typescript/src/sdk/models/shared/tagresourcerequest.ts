import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagListEntry } from "./taglistentry";



// TagResourceRequest
/** 
 * TagResourceRequest
**/
export class TagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: TagListEntry })
  tags: TagListEntry[];
}
