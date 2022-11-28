import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateScalingPlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;
}
