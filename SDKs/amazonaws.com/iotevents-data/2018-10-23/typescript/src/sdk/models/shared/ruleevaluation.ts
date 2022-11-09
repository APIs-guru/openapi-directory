import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleRuleEvaluation } from "./simpleruleevaluation";


// RuleEvaluation
/** 
 * Information needed to evaluate data.
**/
export class RuleEvaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=simpleRuleEvaluation" })
  simpleRuleEvaluation?: SimpleRuleEvaluation;
}
