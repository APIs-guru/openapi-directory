import { SpeakeasyBase } from "../../../internal/utils";
import { AwsJobRateIncreaseCriteria } from "./awsjobrateincreasecriteria";
/**
 * The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout.
**/
export declare class AwsJobExponentialRolloutRate extends SpeakeasyBase {
    baseRatePerMinute: number;
    incrementFactor: number;
    rateIncreaseCriteria: AwsJobRateIncreaseCriteria;
}
