import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineMetadata } from "./pipelinemetadata";
import { PipelineDeclaration } from "./pipelinedeclaration";



// GetPipelineOutput
/** 
 * Represents the output of a <code>GetPipeline</code> action.
**/
export class GetPipelineOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PipelineMetadata;

  @SpeakeasyMetadata({ data: "json, name=pipeline" })
  pipeline?: PipelineDeclaration;
}
