import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleRuleEvaluation } from "./simpleruleevaluation";



// RuleEvaluation
/** 
 * Information needed to evaluate data.
**/
export class RuleEvaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simpleRuleEvaluation" })
  simpleRuleEvaluation?: SimpleRuleEvaluation;
}
