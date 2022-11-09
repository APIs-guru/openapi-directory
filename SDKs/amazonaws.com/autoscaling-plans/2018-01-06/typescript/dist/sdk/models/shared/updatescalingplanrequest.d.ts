import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationSource } from "./applicationsource";
import { ScalingInstruction } from "./scalinginstruction";
export declare class UpdateScalingPlanRequest extends SpeakeasyBase {
    applicationSource?: ApplicationSource;
    scalingInstructions?: ScalingInstruction[];
    scalingPlanName: string;
    scalingPlanVersion: number;
}
