import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchMonitoringConfiguration } from "./cloudwatchmonitoringconfiguration";
import { PersistentAppUiEnum } from "./persistentappuienum";
import { S3MonitoringConfiguration } from "./s3monitoringconfiguration";
/**
 * Configuration setting for monitoring.
**/
export declare class MonitoringConfiguration extends SpeakeasyBase {
    cloudWatchMonitoringConfiguration?: CloudWatchMonitoringConfiguration;
    persistentAppUi?: PersistentAppUiEnum;
    s3MonitoringConfiguration?: S3MonitoringConfiguration;
}
