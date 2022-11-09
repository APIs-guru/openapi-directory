import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudwatchLogsAction
/** 
 * Describes an action that sends data to CloudWatch Logs.
**/
export class CloudwatchLogsAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
