import { SpeakeasyBase } from "../../../internal/utils";
import { ExpressionStatus } from "./expressionstatus";
/**
 * The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.
**/
export declare class DeleteExpressionResponse extends SpeakeasyBase {
    expression: ExpressionStatus;
}
