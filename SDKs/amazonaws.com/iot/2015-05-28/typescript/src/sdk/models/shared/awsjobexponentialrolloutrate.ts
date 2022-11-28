import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsJobRateIncreaseCriteria } from "./awsjobrateincreasecriteria";



// AwsJobExponentialRolloutRate
/** 
 * The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
**/
export class AwsJobExponentialRolloutRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseRatePerMinute" })
  baseRatePerMinute: number;

  @SpeakeasyMetadata({ data: "json, name=incrementFactor" })
  incrementFactor: number;

  @SpeakeasyMetadata({ data: "json, name=rateIncreaseCriteria" })
  rateIncreaseCriteria: AwsJobRateIncreaseCriteria;
}
