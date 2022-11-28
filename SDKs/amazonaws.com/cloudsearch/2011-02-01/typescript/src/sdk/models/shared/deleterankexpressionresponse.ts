import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RankExpressionStatus } from "./rankexpressionstatus";



// DeleteRankExpressionResponse
/** 
 * A response message that contains the status of a deleted <code>RankExpression</code>.
**/
export class DeleteRankExpressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  rankExpression: RankExpressionStatus;
}
