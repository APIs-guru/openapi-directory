import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineDeclaration } from "./pipelinedeclaration";
import { Tag } from "./tag";



// CreatePipelineInput
/** 
 * Represents the input of a <code>CreatePipeline</code> action.
**/
export class CreatePipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipeline" })
  pipeline: PipelineDeclaration;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
