import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineDeclaration } from "./pipelinedeclaration";


// UpdatePipelineOutput
/** 
 * Represents the output of an <code>UpdatePipeline</code> action.
**/
export class UpdatePipelineOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipeline" })
  pipeline?: PipelineDeclaration;
}
