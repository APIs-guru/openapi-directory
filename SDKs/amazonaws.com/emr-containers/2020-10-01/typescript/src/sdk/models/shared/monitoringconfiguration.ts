import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchMonitoringConfiguration } from "./cloudwatchmonitoringconfiguration";
import { PersistentAppUiEnum } from "./persistentappuienum";
import { S3MonitoringConfiguration } from "./s3monitoringconfiguration";



// MonitoringConfiguration
/** 
 * Configuration setting for monitoring.
**/
export class MonitoringConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchMonitoringConfiguration" })
  cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;

  @SpeakeasyMetadata({ data: "json, name=persistentAppUI" })
  persistentAppUi?: PersistentAppUiEnum;

  @SpeakeasyMetadata({ data: "json, name=s3MonitoringConfiguration" })
  s3MonitoringConfiguration?: S3MonitoringConfiguration;
}
