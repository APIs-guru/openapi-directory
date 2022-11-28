import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSource } from "./applicationsource";
import { ScalingInstruction } from "./scalinginstruction";
import { ScalingPlanStatusCodeEnum } from "./scalingplanstatuscodeenum";



// ScalingPlan
/** 
 * Represents a scaling plan.
**/
export class ScalingPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationSource" })
  applicationSource: ApplicationSource;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ScalingInstructions", elemType: ScalingInstruction })
  scalingInstructions: ScalingInstruction[];

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode: ScalingPlanStatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusStartTime" })
  statusStartTime?: Date;
}
