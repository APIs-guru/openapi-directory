import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StageTransitionTypeEnum } from "./stagetransitiontypeenum";


// DisableStageTransitionInput
/** 
 * Represents the input of a <code>DisableStageTransition</code> action.
**/
export class DisableStageTransitionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=stageName" })
  stageName: string;

  @Metadata({ data: "json, name=transitionType" })
  transitionType: StageTransitionTypeEnum;
}
