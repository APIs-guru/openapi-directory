import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionState } from "./actionstate";
import { StageExecution } from "./stageexecution";
import { TransitionState } from "./transitionstate";
import { StageExecution } from "./stageexecution";


// StageState
/** 
 * Represents information about the state of the stage.
**/
export class StageState extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionStates", elemType: shared.ActionState })
  actionStates?: ActionState[];

  @Metadata({ data: "json, name=inboundExecution" })
  inboundExecution?: StageExecution;

  @Metadata({ data: "json, name=inboundTransitionState" })
  inboundTransitionState?: TransitionState;

  @Metadata({ data: "json, name=latestExecution" })
  latestExecution?: StageExecution;

  @Metadata({ data: "json, name=stageName" })
  stageName?: string;
}
