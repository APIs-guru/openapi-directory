import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";



// SimpleRuleEvaluation
/** 
 * Information needed to compare two values with a comparison operator.
**/
export class SimpleRuleEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputPropertyValue" })
  inputPropertyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=thresholdValue" })
  thresholdValue?: string;
}
