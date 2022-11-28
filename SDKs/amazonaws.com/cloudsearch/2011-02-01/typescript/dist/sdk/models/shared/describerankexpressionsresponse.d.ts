import { SpeakeasyBase } from "../../../internal/utils";
import { RankExpressionStatus } from "./rankexpressionstatus";
/**
 * A response message that contains the rank expressions for a search domain.
**/
export declare class DescribeRankExpressionsResponse extends SpeakeasyBase {
    rankExpressions: RankExpressionStatus[];
}
