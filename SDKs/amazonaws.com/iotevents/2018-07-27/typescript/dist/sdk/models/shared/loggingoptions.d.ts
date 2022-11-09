import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorDebugOption } from "./detectordebugoption";
import { LoggingLevelEnum } from "./logginglevelenum";
/**
 * The values of the AWS IoT Events logging options.
**/
export declare class LoggingOptions extends SpeakeasyBase {
    detectorDebugOptions?: DetectorDebugOption[];
    enabled: boolean;
    level: LoggingLevelEnum;
    roleArn: string;
}
