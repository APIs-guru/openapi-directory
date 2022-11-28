import { SpeakeasyBase } from "../../../internal/utils";
import { RecoveryOptionNameTypeEnum } from "./recoveryoptionnametypeenum";
/**
 * A map containing a priority as a key, and recovery method name as a value.
**/
export declare class RecoveryOptionType extends SpeakeasyBase {
    name: RecoveryOptionNameTypeEnum;
    priority: number;
}
