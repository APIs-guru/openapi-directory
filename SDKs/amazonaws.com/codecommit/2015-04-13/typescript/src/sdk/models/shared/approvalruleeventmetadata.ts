import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApprovalRuleEventMetadata
/** 
 * Returns information about an event for an approval rule.
**/
export class ApprovalRuleEventMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleContent" })
  approvalRuleContent?: string;

  @Metadata({ data: "json, name=approvalRuleId" })
  approvalRuleId?: string;

  @Metadata({ data: "json, name=approvalRuleName" })
  approvalRuleName?: string;
}
