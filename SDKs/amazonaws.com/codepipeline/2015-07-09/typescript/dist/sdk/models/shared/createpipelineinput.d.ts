import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineDeclaration } from "./pipelinedeclaration";
import { Tag } from "./tag";
/**
 * Represents the input of a <code>CreatePipeline</code> action.
**/
export declare class CreatePipelineInput extends SpeakeasyBase {
    pipeline: PipelineDeclaration;
    tags?: Tag[];
}
