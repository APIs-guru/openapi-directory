import { SpeakeasyBase } from "../../../internal/utils";
import { NamedRankExpression } from "./namedrankexpression";
import { OptionStatus } from "./optionstatus";
/**
 * The value of a <code>RankExpression</code> and its current status.
**/
export declare class RankExpressionStatus extends SpeakeasyBase {
    options: NamedRankExpression;
    status: OptionStatus;
}
