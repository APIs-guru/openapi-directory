import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";



// SimpleRule
/** 
 * A rule that compares an input property value to a threshold value with a comparison operator.
**/
export class SimpleRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=inputProperty" })
  inputProperty: string;

  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold: string;
}
