import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudWatchMonitoringConfiguration
/** 
 * A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.
**/
export class CloudWatchMonitoringConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=logStreamNamePrefix" })
  logStreamNamePrefix?: string;
}
