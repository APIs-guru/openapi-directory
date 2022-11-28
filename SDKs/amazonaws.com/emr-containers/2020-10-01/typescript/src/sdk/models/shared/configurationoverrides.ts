import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { MonitoringConfiguration } from "./monitoringconfiguration";



// ConfigurationOverrides
/** 
 * A configuration specification to be used to override existing configurations.
**/
export class ConfigurationOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationConfiguration", elemType: Configuration })
  applicationConfiguration?: Configuration[];

  @SpeakeasyMetadata({ data: "json, name=monitoringConfiguration" })
  monitoringConfiguration?: MonitoringConfiguration;
}
