import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineDeclaration } from "./pipelinedeclaration";



// UpdatePipelineOutput
/** 
 * Represents the output of an <code>UpdatePipeline</code> action.
**/
export class UpdatePipelineOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipeline" })
  pipeline?: PipelineDeclaration;
}
