import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineDeclaration } from "./pipelinedeclaration";



// UpdatePipelineInput
/** 
 * Represents the input of an <code>UpdatePipeline</code> action.
**/
export class UpdatePipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipeline" })
  pipeline: PipelineDeclaration;
}
