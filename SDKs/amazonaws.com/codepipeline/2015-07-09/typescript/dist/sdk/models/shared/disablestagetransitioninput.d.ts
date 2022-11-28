import { SpeakeasyBase } from "../../../internal/utils";
import { StageTransitionTypeEnum } from "./stagetransitiontypeenum";
/**
 * Represents the input of a <code>DisableStageTransition</code> action.
**/
export declare class DisableStageTransitionInput extends SpeakeasyBase {
    pipelineName: string;
    reason: string;
    stageName: string;
    transitionType: StageTransitionTypeEnum;
}
