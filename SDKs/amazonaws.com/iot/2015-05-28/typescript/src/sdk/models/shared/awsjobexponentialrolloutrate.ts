import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsJobRateIncreaseCriteria } from "./awsjobrateincreasecriteria";


// AwsJobExponentialRolloutRate
/** 
 * The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
**/
export class AwsJobExponentialRolloutRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseRatePerMinute" })
  baseRatePerMinute: number;

  @Metadata({ data: "json, name=incrementFactor" })
  incrementFactor: number;

  @Metadata({ data: "json, name=rateIncreaseCriteria" })
  rateIncreaseCriteria: AwsJobRateIncreaseCriteria;
}
