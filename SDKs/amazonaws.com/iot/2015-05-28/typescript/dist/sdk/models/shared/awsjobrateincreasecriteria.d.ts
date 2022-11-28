import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The criteria to initiate the increase in rate of rollout for a job.
**/
export declare class AwsJobRateIncreaseCriteria extends SpeakeasyBase {
    numberOfNotifiedThings?: number;
    numberOfSucceededThings?: number;
}
