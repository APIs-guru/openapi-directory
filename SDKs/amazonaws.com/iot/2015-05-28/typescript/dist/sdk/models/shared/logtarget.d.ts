import { SpeakeasyBase } from "../../../internal/utils";
import { LogTargetTypeEnum } from "./logtargettypeenum";
/**
 * A log target.
**/
export declare class LogTarget extends SpeakeasyBase {
    targetName?: string;
    targetType: LogTargetTypeEnum;
}
