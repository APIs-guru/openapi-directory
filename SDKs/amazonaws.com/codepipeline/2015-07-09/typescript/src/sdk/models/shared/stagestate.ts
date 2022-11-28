import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionState } from "./actionstate";
import { StageExecution } from "./stageexecution";
import { TransitionState } from "./transitionstate";



// StageState
/** 
 * Represents information about the state of the stage.
**/
export class StageState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionStates", elemType: ActionState })
  actionStates?: ActionState[];

  @SpeakeasyMetadata({ data: "json, name=inboundExecution" })
  inboundExecution?: StageExecution;

  @SpeakeasyMetadata({ data: "json, name=inboundTransitionState" })
  inboundTransitionState?: TransitionState;

  @SpeakeasyMetadata({ data: "json, name=latestExecution" })
  latestExecution?: StageExecution;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName?: string;
}
