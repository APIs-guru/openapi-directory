import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RankExpressionStatus } from "./rankexpressionstatus";



// DefineRankExpressionResponse
/** 
 * A response message that contains the status of an updated <code>RankExpression</code>.
**/
export class DefineRankExpressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  rankExpression: RankExpressionStatus;
}
