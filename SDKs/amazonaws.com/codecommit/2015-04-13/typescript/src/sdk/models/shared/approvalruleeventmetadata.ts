import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApprovalRuleEventMetadata
/** 
 * Returns information about an event for an approval rule.
**/
export class ApprovalRuleEventMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleContent" })
  approvalRuleContent?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleId" })
  approvalRuleId?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleName" })
  approvalRuleName?: string;
}
