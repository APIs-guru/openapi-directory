import { SpeakeasyBase } from "../../../internal/utils";
import { StageRetryModeEnum } from "./stageretrymodeenum";
/**
 * Represents the input of a <code>RetryStageExecution</code> action.
**/
export declare class RetryStageExecutionInput extends SpeakeasyBase {
    pipelineExecutionId: string;
    pipelineName: string;
    retryMode: StageRetryModeEnum;
    stageName: string;
}
