import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
**/
export declare class RateIncreaseCriteria extends SpeakeasyBase {
    numberOfNotifiedThings?: number;
    numberOfSucceededThings?: number;
}
