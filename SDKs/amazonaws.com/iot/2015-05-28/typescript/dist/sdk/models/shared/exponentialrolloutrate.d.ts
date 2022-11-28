import { SpeakeasyBase } from "../../../internal/utils";
import { RateIncreaseCriteria } from "./rateincreasecriteria";
/**
 * Allows you to create an exponential rate of rollout for a job.
**/
export declare class ExponentialRolloutRate extends SpeakeasyBase {
    baseRatePerMinute: number;
    incrementFactor: number;
    rateIncreaseCriteria: RateIncreaseCriteria;
}
