import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IoTJobAbortConfig } from "./iotjobabortconfig";
import { IoTJobExecutionsRolloutConfig } from "./iotjobexecutionsrolloutconfig";
import { IoTJobTimeoutConfig } from "./iotjobtimeoutconfig";


// DeploymentIoTJobConfiguration
/** 
 * Contains information about an IoT job configuration.
**/
export class DeploymentIoTJobConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortConfig" })
  abortConfig?: IoTJobAbortConfig;

  @Metadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig;

  @Metadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: IoTJobTimeoutConfig;
}
