import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OriginApprovalRuleTemplate
/** 
 * Returns information about the template that created the approval rule for a pull request.
**/
export class OriginApprovalRuleTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateId" })
  approvalRuleTemplateId?: string;

  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName?: string;
}
