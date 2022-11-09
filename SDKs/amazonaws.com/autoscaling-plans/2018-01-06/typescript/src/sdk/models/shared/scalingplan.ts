import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationSource } from "./applicationsource";
import { ScalingInstruction } from "./scalinginstruction";
import { ScalingPlanStatusCodeEnum } from "./scalingplanstatuscodeenum";


// ScalingPlan
/** 
 * Represents a scaling plan.
**/
export class ScalingPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationSource" })
  applicationSource: ApplicationSource;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=ScalingInstructions", elemType: shared.ScalingInstruction })
  scalingInstructions: ScalingInstruction[];

  @Metadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @Metadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode: ScalingPlanStatusCodeEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=StatusStartTime" })
  statusStartTime?: Date;
}
