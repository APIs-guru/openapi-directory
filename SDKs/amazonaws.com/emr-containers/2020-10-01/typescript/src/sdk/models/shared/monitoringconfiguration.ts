import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchMonitoringConfiguration } from "./cloudwatchmonitoringconfiguration";
import { PersistentAppUiEnum } from "./persistentappuienum";
import { S3MonitoringConfiguration } from "./s3monitoringconfiguration";


// MonitoringConfiguration
/** 
 * Configuration setting for monitoring.
**/
export class MonitoringConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatchMonitoringConfiguration" })
  cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;

  @Metadata({ data: "json, name=persistentAppUI" })
  persistentAppUi?: PersistentAppUiEnum;

  @Metadata({ data: "json, name=s3MonitoringConfiguration" })
  s3MonitoringConfiguration?: S3MonitoringConfiguration;
}
