import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateScalingPlanResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScalingPlanVersion" })
  scalingPlanVersion: number;
}
