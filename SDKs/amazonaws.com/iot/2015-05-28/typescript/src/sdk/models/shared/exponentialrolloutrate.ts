import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateIncreaseCriteria } from "./rateincreasecriteria";



// ExponentialRolloutRate
/** 
 * Allows you to create an exponential rate of rollout for a job.
**/
export class ExponentialRolloutRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseRatePerMinute" })
  baseRatePerMinute: number;

  @SpeakeasyMetadata({ data: "json, name=incrementFactor" })
  incrementFactor: number;

  @SpeakeasyMetadata({ data: "json, name=rateIncreaseCriteria" })
  rateIncreaseCriteria: RateIncreaseCriteria;
}
