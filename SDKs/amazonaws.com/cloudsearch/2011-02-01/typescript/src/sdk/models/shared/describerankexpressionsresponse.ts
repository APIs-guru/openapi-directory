import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RankExpressionStatus } from "./rankexpressionstatus";



// DescribeRankExpressionsResponse
/** 
 * A response message that contains the rank expressions for a search domain.
**/
export class DescribeRankExpressionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: RankExpressionStatus })
  rankExpressions: RankExpressionStatus[];
}
