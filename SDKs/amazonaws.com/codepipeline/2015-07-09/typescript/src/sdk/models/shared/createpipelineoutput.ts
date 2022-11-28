import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineDeclaration } from "./pipelinedeclaration";
import { Tag } from "./tag";



// CreatePipelineOutput
/** 
 * Represents the output of a <code>CreatePipeline</code> action.
**/
export class CreatePipelineOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipeline" })
  pipeline?: PipelineDeclaration;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
