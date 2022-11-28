import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSource } from "./applicationsource";
import { ScalingInstruction } from "./scalinginstruction";



export class CreateScalingPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationSource" })
  applicationSource: ApplicationSource;

  @SpeakeasyMetadata({ data: "json, name=ScalingInstructions", elemType: ScalingInstruction })
  scalingInstructions: ScalingInstruction[];

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;
}
