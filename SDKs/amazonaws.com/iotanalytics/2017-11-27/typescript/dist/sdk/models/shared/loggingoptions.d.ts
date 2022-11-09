import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingLevelEnum } from "./logginglevelenum";
/**
 * Information about logging options.
**/
export declare class LoggingOptions extends SpeakeasyBase {
    enabled: boolean;
    level: LoggingLevelEnum;
    roleArn: string;
}
