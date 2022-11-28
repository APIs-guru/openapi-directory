import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudwatchLogsAction
/** 
 * Describes an action that sends data to CloudWatch Logs.
**/
export class CloudwatchLogsAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
