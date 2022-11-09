import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineDeclaration } from "./pipelinedeclaration";
import { Tag } from "./tag";


// CreatePipelineInput
/** 
 * Represents the input of a <code>CreatePipeline</code> action.
**/
export class CreatePipelineInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipeline" })
  pipeline: PipelineDeclaration;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
