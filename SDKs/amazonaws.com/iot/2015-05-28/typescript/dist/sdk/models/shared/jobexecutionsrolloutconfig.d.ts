import { SpeakeasyBase } from "../../../internal/utils";
import { ExponentialRolloutRate } from "./exponentialrolloutrate";
/**
 * Allows you to create a staged rollout of a job.
**/
export declare class JobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: ExponentialRolloutRate;
    maximumPerMinute?: number;
}
