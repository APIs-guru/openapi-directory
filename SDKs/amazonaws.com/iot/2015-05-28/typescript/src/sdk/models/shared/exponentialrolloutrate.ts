import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RateIncreaseCriteria } from "./rateincreasecriteria";


// ExponentialRolloutRate
/** 
 * Allows you to create an exponential rate of rollout for a job.
**/
export class ExponentialRolloutRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseRatePerMinute" })
  baseRatePerMinute: number;

  @Metadata({ data: "json, name=incrementFactor" })
  incrementFactor: number;

  @Metadata({ data: "json, name=rateIncreaseCriteria" })
  rateIncreaseCriteria: RateIncreaseCriteria;
}
