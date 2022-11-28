import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpressionStatus } from "./expressionstatus";



// DefineExpressionResponse
/** 
 * The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.
**/
export class DefineExpressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  expression: ExpressionStatus;
}
