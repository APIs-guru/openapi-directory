import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StageTransitionTypeEnum } from "./stagetransitiontypeenum";



// EnableStageTransitionInput
/** 
 * Represents the input of an <code>EnableStageTransition</code> action.
**/
export class EnableStageTransitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName: string;

  @SpeakeasyMetadata({ data: "json, name=transitionType" })
  transitionType: StageTransitionTypeEnum;
}
