import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";


// SimpleRuleEvaluation
/** 
 * Information needed to compare two values with a comparison operator.
**/
export class SimpleRuleEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputPropertyValue" })
  inputPropertyValue?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: ComparisonOperatorEnum;

  @Metadata({ data: "json, name=thresholdValue" })
  thresholdValue?: string;
}
