import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Expression } from "./expression";
import { OptionStatus } from "./optionstatus";



// ExpressionStatus
/** 
 * The value of an <code>Expression</code> and its current status.
**/
export class ExpressionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: Expression;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
