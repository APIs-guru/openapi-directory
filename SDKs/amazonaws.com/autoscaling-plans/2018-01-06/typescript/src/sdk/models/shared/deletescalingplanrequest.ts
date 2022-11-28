import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteScalingPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScalingPlanName" })
  scalingPlanName: string;

  @SpeakeasyMetadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;
}
