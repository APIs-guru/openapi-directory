import { SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";
import { LogTarget } from "./logtarget";
/**
 * The target configuration.
**/
export declare class LogTargetConfiguration extends SpeakeasyBase {
    logLevel?: LogLevelEnum;
    logTarget?: LogTarget;
}
