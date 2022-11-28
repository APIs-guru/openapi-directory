import { SpeakeasyBase } from "../../../internal/utils";
import { StageTransitionTypeEnum } from "./stagetransitiontypeenum";
/**
 * Represents the input of an <code>EnableStageTransition</code> action.
**/
export declare class EnableStageTransitionInput extends SpeakeasyBase {
    pipelineName: string;
    stageName: string;
    transitionType: StageTransitionTypeEnum;
}
