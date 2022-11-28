import { SpeakeasyBase } from "../../../internal/utils";
import { TargetHealthReasonEnumEnum } from "./targethealthreasonenumenum";
import { TargetHealthStateEnumEnum } from "./targethealthstateenumenum";
/**
 * Information about the current health of a target.
**/
export declare class TargetHealth extends SpeakeasyBase {
    description?: string;
    reason?: TargetHealthReasonEnumEnum;
    state?: TargetHealthStateEnumEnum;
}
