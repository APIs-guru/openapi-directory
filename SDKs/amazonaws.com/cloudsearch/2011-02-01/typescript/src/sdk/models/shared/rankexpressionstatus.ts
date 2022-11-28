import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamedRankExpression } from "./namedrankexpression";
import { OptionStatus } from "./optionstatus";



// RankExpressionStatus
/** 
 * The value of a <code>RankExpression</code> and its current status.
**/
export class RankExpressionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: NamedRankExpression;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
