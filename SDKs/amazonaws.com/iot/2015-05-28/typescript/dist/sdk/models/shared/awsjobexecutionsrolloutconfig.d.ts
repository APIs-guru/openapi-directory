import { SpeakeasyBase } from "../../../internal/utils";
import { AwsJobExponentialRolloutRate } from "./awsjobexponentialrolloutrate";
/**
 * Configuration for the rollout of OTA updates.
**/
export declare class AwsJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: AwsJobExponentialRolloutRate;
    maximumPerMinute?: number;
}
