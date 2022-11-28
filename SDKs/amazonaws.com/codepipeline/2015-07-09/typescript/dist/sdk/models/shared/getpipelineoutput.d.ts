import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineMetadata } from "./pipelinemetadata";
import { PipelineDeclaration } from "./pipelinedeclaration";
/**
 * Represents the output of a <code>GetPipeline</code> action.
**/
export declare class GetPipelineOutput extends SpeakeasyBase {
    metadata?: PipelineMetadata;
    pipeline?: PipelineDeclaration;
}
