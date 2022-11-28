import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Evaluation
/** 
 * Returns information about the approval rules applied to a pull request and whether conditions have been met.
**/
export class Evaluation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRulesNotSatisfied" })
  approvalRulesNotSatisfied?: string[];

  @SpeakeasyMetadata({ data: "json, name=approvalRulesSatisfied" })
  approvalRulesSatisfied?: string[];

  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=overridden" })
  overridden?: boolean;
}
