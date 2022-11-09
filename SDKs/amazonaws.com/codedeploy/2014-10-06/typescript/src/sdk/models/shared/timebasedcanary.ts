import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeBasedCanary
/** 
 * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
**/
export class TimeBasedCanary extends SpeakeasyBase {
  @Metadata({ data: "json, name=canaryInterval" })
  canaryInterval?: number;

  @Metadata({ data: "json, name=canaryPercentage" })
  canaryPercentage?: number;
}
