import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";


// SimpleRule
/** 
 * A rule that compares an input property value to a threshold value with a comparison operator.
**/
export class SimpleRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=comparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;

  @Metadata({ data: "json, name=inputProperty" })
  inputProperty: string;

  @Metadata({ data: "json, name=threshold" })
  threshold: string;
}
