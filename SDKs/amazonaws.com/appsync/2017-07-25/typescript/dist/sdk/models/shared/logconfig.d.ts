import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldLogLevelEnum } from "./fieldloglevelenum";
/**
 * The CloudWatch Logs configuration.
**/
export declare class LogConfig extends SpeakeasyBase {
    cloudWatchLogsRoleArn: string;
    excludeVerboseContent?: boolean;
    fieldLogLevel: FieldLogLevelEnum;
}
