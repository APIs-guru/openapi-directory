import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineMetadata } from "./pipelinemetadata";
import { PipelineDeclaration } from "./pipelinedeclaration";


// GetPipelineOutput
/** 
 * Represents the output of a <code>GetPipeline</code> action.
**/
export class GetPipelineOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: PipelineMetadata;

  @Metadata({ data: "json, name=pipeline" })
  pipeline?: PipelineDeclaration;
}
