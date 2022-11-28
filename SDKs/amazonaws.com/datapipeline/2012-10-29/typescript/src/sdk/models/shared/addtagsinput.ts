import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// AddTagsInput
/** 
 * Contains the parameters for AddTags.
**/
export class AddTagsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags: Tag[];
}
