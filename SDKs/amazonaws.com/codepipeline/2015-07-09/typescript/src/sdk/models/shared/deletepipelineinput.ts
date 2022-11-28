import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeletePipelineInput
/** 
 * Represents the input of a <code>DeletePipeline</code> action.
**/
export class DeletePipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
