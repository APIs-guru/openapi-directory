import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IoTJobAbortConfig } from "./iotjobabortconfig";
import { IoTJobExecutionsRolloutConfig } from "./iotjobexecutionsrolloutconfig";
import { IoTJobTimeoutConfig } from "./iotjobtimeoutconfig";



// DeploymentIoTJobConfiguration
/** 
 * Contains information about an IoT job configuration.
**/
export class DeploymentIoTJobConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortConfig" })
  abortConfig?: IoTJobAbortConfig;

  @SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: IoTJobTimeoutConfig;
}
