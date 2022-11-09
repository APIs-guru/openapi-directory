import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeletePipelineInput
/** 
 * Represents the input of a <code>DeletePipeline</code> action.
**/
export class DeletePipelineInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
