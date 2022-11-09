import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Configuration } from "./configuration";
import { MonitoringConfiguration } from "./monitoringconfiguration";


// ConfigurationOverrides
/** 
 * A configuration specification to be used to override existing configurations.
**/
export class ConfigurationOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationConfiguration", elemType: shared.Configuration })
  applicationConfiguration?: Configuration[];

  @Metadata({ data: "json, name=monitoringConfiguration" })
  monitoringConfiguration?: MonitoringConfiguration;
}
