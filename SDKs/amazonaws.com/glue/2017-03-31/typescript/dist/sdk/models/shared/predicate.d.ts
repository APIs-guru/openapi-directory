import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { LogicalEnum } from "./logicalenum";
/**
 * Defines the predicate of the trigger, which determines when it fires.
**/
export declare class Predicate extends SpeakeasyBase {
    conditions?: Condition[];
    logical?: LogicalEnum;
}
