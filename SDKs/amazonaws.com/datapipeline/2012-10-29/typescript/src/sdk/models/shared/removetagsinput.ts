import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveTagsInput
/** 
 * Contains the parameters for RemoveTags.
**/
export class RemoveTagsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=tagKeys" })
  tagKeys: string[];
}
