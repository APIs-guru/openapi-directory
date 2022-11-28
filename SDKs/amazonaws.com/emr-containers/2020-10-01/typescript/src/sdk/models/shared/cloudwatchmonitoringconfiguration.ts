import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchMonitoringConfiguration
/** 
 * A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.
**/
export class CloudWatchMonitoringConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=logStreamNamePrefix" })
  logStreamNamePrefix?: string;
}
