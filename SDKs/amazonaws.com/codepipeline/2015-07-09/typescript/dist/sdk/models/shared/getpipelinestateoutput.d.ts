import { SpeakeasyBase } from "../../../internal/utils";
import { StageState } from "./stagestate";
/**
 * Represents the output of a <code>GetPipelineState</code> action.
**/
export declare class GetPipelineStateOutput extends SpeakeasyBase {
    created?: Date;
    pipelineName?: string;
    pipelineVersion?: number;
    stageStates?: StageState[];
    updated?: Date;
}
