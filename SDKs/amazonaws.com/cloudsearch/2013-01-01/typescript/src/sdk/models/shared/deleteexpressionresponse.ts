import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpressionStatus } from "./expressionstatus";



// DeleteExpressionResponse
/** 
 * The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.
**/
export class DeleteExpressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  expression: ExpressionStatus;
}
