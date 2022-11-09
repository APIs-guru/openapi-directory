import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApprovalRuleTemplate
/** 
 * Returns information about an approval rule template.
**/
export class ApprovalRuleTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateContent" })
  approvalRuleTemplateContent?: string;

  @Metadata({ data: "json, name=approvalRuleTemplateDescription" })
  approvalRuleTemplateDescription?: string;

  @Metadata({ data: "json, name=approvalRuleTemplateId" })
  approvalRuleTemplateId?: string;

  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=lastModifiedUser" })
  lastModifiedUser?: string;

  @Metadata({ data: "json, name=ruleContentSha256" })
  ruleContentSha256?: string;
}
