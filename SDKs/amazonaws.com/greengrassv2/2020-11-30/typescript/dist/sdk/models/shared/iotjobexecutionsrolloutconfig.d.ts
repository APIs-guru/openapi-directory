import { SpeakeasyBase } from "../../../internal/utils";
import { IoTJobExponentialRolloutRate } from "./iotjobexponentialrolloutrate";
/**
 * Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.
**/
export declare class IoTJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: IoTJobExponentialRolloutRate;
    maximumPerMinute?: number;
}
