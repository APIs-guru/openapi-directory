import { SpeakeasyBase } from "../../../internal/utils";
import { Expression } from "./expression";
import { OptionStatus } from "./optionstatus";
/**
 * The value of an <code>Expression</code> and its current status.
**/
export declare class ExpressionStatus extends SpeakeasyBase {
    options: Expression;
    status: OptionStatus;
}
