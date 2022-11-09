import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteScalingPlanRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @Metadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;
}
