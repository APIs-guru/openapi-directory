import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggerComponentEnum } from "./loggercomponentenum";
import { LoggerLevelEnum } from "./loggerlevelenum";
import { LoggerTypeEnum } from "./loggertypeenum";
/**
 * Information about a logger
**/
export declare class Logger extends SpeakeasyBase {
    component: LoggerComponentEnum;
    id: string;
    level: LoggerLevelEnum;
    space?: number;
    type: LoggerTypeEnum;
}
