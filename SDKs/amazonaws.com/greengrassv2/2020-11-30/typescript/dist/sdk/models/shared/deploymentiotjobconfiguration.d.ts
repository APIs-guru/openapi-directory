import { SpeakeasyBase } from "../../../internal/utils";
import { IoTJobAbortConfig } from "./iotjobabortconfig";
import { IoTJobExecutionsRolloutConfig } from "./iotjobexecutionsrolloutconfig";
import { IoTJobTimeoutConfig } from "./iotjobtimeoutconfig";
/**
 * Contains information about an IoT job configuration.
**/
export declare class DeploymentIoTJobConfiguration extends SpeakeasyBase {
    abortConfig?: IoTJobAbortConfig;
    jobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig;
    timeoutConfig?: IoTJobTimeoutConfig;
}
