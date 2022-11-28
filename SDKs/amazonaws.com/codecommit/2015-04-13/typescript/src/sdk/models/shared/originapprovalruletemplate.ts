import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OriginApprovalRuleTemplate
/** 
 * Returns information about the template that created the approval rule for a pull request.
**/
export class OriginApprovalRuleTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateId" })
  approvalRuleTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName?: string;
}
