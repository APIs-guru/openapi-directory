import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogsConfigStatusTypeEnum } from "./logsconfigstatustypeenum";



// CloudWatchLogsConfig
/** 
 *  Information about CloudWatch Logs for a build project. 
**/
export class CloudWatchLogsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: LogsConfigStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=streamName" })
  streamName?: string;
}
