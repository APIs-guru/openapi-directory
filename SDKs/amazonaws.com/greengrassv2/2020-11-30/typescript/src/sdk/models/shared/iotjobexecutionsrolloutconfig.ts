import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IoTJobExponentialRolloutRate } from "./iotjobexponentialrolloutrate";



// IoTJobExecutionsRolloutConfig
/** 
 * Contains information about the rollout configuration for a job. This configuration defines the rate at which the job deploys a configuration to a fleet of target devices.
**/
export class IoTJobExecutionsRolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exponentialRate" })
  exponentialRate?: IoTJobExponentialRolloutRate;

  @SpeakeasyMetadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}
