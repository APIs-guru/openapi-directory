import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeBasedLinear
/** 
 * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
**/
export class TimeBasedLinear extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linearInterval" })
  linearInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=linearPercentage" })
  linearPercentage?: number;
}
