import { SpeakeasyBase } from "../../../internal/utils";
import { ExpressionStatus } from "./expressionstatus";
/**
 * The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.
**/
export declare class DescribeExpressionsResponse extends SpeakeasyBase {
    expressions: ExpressionStatus[];
}
