import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSource } from "./applicationsource";
import { ScalingInstruction } from "./scalinginstruction";
import { ScalingPlanStatusCodeEnum } from "./scalingplanstatuscodeenum";
/**
 * Represents a scaling plan.
**/
export declare class ScalingPlan extends SpeakeasyBase {
    applicationSource: ApplicationSource;
    creationTime?: Date;
    scalingInstructions: ScalingInstruction[];
    scalingPlanName: string;
    scalingPlanVersion: number;
    statusCode: ScalingPlanStatusCodeEnum;
    statusMessage?: string;
    statusStartTime?: Date;
}
