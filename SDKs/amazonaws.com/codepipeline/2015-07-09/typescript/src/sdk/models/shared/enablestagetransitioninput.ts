import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StageTransitionTypeEnum } from "./stagetransitiontypeenum";


// EnableStageTransitionInput
/** 
 * Represents the input of an <code>EnableStageTransition</code> action.
**/
export class EnableStageTransitionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=stageName" })
  stageName: string;

  @Metadata({ data: "json, name=transitionType" })
  transitionType: StageTransitionTypeEnum;
}
