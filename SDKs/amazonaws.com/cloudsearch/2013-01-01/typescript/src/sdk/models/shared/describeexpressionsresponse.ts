import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpressionStatus } from "./expressionstatus";



// DescribeExpressionsResponse
/** 
 * The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.
**/
export class DescribeExpressionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ExpressionStatus })
  expressions: ExpressionStatus[];
}
