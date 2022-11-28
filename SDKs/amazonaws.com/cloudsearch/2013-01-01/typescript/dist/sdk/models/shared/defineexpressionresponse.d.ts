import { SpeakeasyBase } from "../../../internal/utils";
import { ExpressionStatus } from "./expressionstatus";
/**
 * The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.
**/
export declare class DefineExpressionResponse extends SpeakeasyBase {
    expression: ExpressionStatus;
}
