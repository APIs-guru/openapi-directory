import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IoTJobExponentialRolloutRate } from "./iotjobexponentialrolloutrate";


// IoTJobExecutionsRolloutConfig
/** 
 * Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.
**/
export class IoTJobExecutionsRolloutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exponentialRate" })
  exponentialRate?: IoTJobExponentialRolloutRate;

  @Metadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}
