import { SpeakeasyBase } from "../../../internal/utils";
import { AcknowledgeFlow } from "./acknowledgeflow";
import { InitializationConfiguration } from "./initializationconfiguration";
/**
 * Contains the configuration information of alarm state changes.
**/
export declare class AlarmCapabilities extends SpeakeasyBase {
    acknowledgeFlow?: AcknowledgeFlow;
    initializationConfiguration?: InitializationConfiguration;
}
