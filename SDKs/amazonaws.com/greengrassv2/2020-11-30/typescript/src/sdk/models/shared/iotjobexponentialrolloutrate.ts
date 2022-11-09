import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IoTJobRateIncreaseCriteria } from "./iotjobrateincreasecriteria";


// IoTJobExponentialRolloutRate
/** 
 * Contains information about an exponential rollout rate for a configuration deployment job.
**/
export class IoTJobExponentialRolloutRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseRatePerMinute" })
  baseRatePerMinute: number;

  @Metadata({ data: "json, name=incrementFactor" })
  incrementFactor: number;

  @Metadata({ data: "json, name=rateIncreaseCriteria" })
  rateIncreaseCriteria: IoTJobRateIncreaseCriteria;
}
