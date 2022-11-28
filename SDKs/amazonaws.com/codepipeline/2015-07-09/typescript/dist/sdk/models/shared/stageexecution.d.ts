import { SpeakeasyBase } from "../../../internal/utils";
import { StageExecutionStatusEnum } from "./stageexecutionstatusenum";
/**
 * Represents information about the run of a stage.
**/
export declare class StageExecution extends SpeakeasyBase {
    pipelineExecutionId: string;
    status: StageExecutionStatusEnum;
}
