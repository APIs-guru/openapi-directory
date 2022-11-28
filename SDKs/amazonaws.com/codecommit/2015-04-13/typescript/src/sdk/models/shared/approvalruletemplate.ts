import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApprovalRuleTemplate
/** 
 * Returns information about an approval rule template.
**/
export class ApprovalRuleTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateContent" })
  approvalRuleTemplateContent?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateDescription" })
  approvalRuleTemplateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateId" })
  approvalRuleTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedUser" })
  lastModifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=ruleContentSha256" })
  ruleContentSha256?: string;
}
