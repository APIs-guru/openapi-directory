import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineDeclaration } from "./pipelinedeclaration";


// UpdatePipelineInput
/** 
 * Represents the input of an <code>UpdatePipeline</code> action.
**/
export class UpdatePipelineInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipeline" })
  pipeline: PipelineDeclaration;
}
