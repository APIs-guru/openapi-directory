import { SpeakeasyBase } from "../../../internal/utils";
import { ActionState } from "./actionstate";
import { StageExecution } from "./stageexecution";
import { TransitionState } from "./transitionstate";
/**
 * Represents information about the state of the stage.
**/
export declare class StageState extends SpeakeasyBase {
    actionStates?: ActionState[];
    inboundExecution?: StageExecution;
    inboundTransitionState?: TransitionState;
    latestExecution?: StageExecution;
    stageName?: string;
}
