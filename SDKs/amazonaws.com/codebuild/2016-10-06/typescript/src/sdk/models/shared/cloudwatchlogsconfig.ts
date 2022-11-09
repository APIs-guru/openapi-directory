import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LogsConfigStatusTypeEnum } from "./logsconfigstatustypeenum";


// CloudWatchLogsConfig
/** 
 *  Information about CloudWatch Logs for a build project. 
**/
export class CloudWatchLogsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupName" })
  groupName?: string;

  @Metadata({ data: "json, name=status" })
  status: LogsConfigStatusTypeEnum;

  @Metadata({ data: "json, name=streamName" })
  streamName?: string;
}
