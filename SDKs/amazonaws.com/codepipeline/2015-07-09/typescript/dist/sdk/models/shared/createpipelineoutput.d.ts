import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineDeclaration } from "./pipelinedeclaration";
import { Tag } from "./tag";
/**
 * Represents the output of a <code>CreatePipeline</code> action.
**/
export declare class CreatePipelineOutput extends SpeakeasyBase {
    pipeline?: PipelineDeclaration;
    tags?: Tag[];
}
