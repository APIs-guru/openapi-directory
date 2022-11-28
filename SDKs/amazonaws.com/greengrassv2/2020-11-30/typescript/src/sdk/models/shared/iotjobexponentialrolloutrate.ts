import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IoTJobRateIncreaseCriteria } from "./iotjobrateincreasecriteria";



// IoTJobExponentialRolloutRate
/** 
 * Contains information about an exponential rollout rate for a configuration deployment job.
**/
export class IoTJobExponentialRolloutRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseRatePerMinute" })
  baseRatePerMinute: number;

  @SpeakeasyMetadata({ data: "json, name=incrementFactor" })
  incrementFactor: number;

  @SpeakeasyMetadata({ data: "json, name=rateIncreaseCriteria" })
  rateIncreaseCriteria: IoTJobRateIncreaseCriteria;
}
