import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationSource } from "./applicationsource";
import { ScalingInstruction } from "./scalinginstruction";


export class CreateScalingPlanRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationSource" })
  applicationSource: ApplicationSource;

  @Metadata({ data: "json, name=ScalingInstructions", elemType: shared.ScalingInstruction })
  scalingInstructions: ScalingInstruction[];

  @Metadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;
}
