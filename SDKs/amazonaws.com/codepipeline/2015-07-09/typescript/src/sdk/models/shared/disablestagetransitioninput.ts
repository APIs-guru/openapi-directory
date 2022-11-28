import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StageTransitionTypeEnum } from "./stagetransitiontypeenum";



// DisableStageTransitionInput
/** 
 * Represents the input of a <code>DisableStageTransition</code> action.
**/
export class DisableStageTransitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName: string;

  @SpeakeasyMetadata({ data: "json, name=transitionType" })
  transitionType: StageTransitionTypeEnum;
}
