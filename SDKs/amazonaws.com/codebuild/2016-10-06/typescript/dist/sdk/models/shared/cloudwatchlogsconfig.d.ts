import { SpeakeasyBase } from "../../../internal/utils";
import { LogsConfigStatusTypeEnum } from "./logsconfigstatustypeenum";
/**
 *  Information about CloudWatch Logs for a build project.
**/
export declare class CloudWatchLogsConfig extends SpeakeasyBase {
    groupName?: string;
    status: LogsConfigStatusTypeEnum;
    streamName?: string;
}
