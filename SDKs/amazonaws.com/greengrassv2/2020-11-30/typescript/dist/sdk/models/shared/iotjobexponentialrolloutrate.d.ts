import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IoTJobRateIncreaseCriteria } from "./iotjobrateincreasecriteria";
/**
 * Contains information about an exponential rollout rate for a configuration deployment job.
**/
export declare class IoTJobExponentialRolloutRate extends SpeakeasyBase {
    baseRatePerMinute: number;
    incrementFactor: number;
    rateIncreaseCriteria: IoTJobRateIncreaseCriteria;
}
