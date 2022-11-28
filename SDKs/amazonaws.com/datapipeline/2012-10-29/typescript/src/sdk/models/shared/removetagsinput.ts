import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveTagsInput
/** 
 * Contains the parameters for RemoveTags.
**/
export class RemoveTagsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @SpeakeasyMetadata({ data: "json, name=tagKeys" })
  tagKeys: string[];
}
