import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Evaluation
/** 
 * Returns information about the approval rules applied to a pull request and whether conditions have been met.
**/
export class Evaluation extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRulesNotSatisfied" })
  approvalRulesNotSatisfied?: string[];

  @Metadata({ data: "json, name=approvalRulesSatisfied" })
  approvalRulesSatisfied?: string[];

  @Metadata({ data: "json, name=approved" })
  approved?: boolean;

  @Metadata({ data: "json, name=overridden" })
  overridden?: boolean;
}
