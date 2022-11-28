import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { MonitoringConfiguration } from "./monitoringconfiguration";
/**
 * A configuration specification to be used to override existing configurations.
**/
export declare class ConfigurationOverrides extends SpeakeasyBase {
    applicationConfiguration?: Configuration[];
    monitoringConfiguration?: MonitoringConfiguration;
}
