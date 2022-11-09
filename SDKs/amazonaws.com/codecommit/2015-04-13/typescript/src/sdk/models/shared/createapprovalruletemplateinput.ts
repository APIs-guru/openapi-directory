import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateApprovalRuleTemplateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateContent" })
  approvalRuleTemplateContent: string;

  @Metadata({ data: "json, name=approvalRuleTemplateDescription" })
  approvalRuleTemplateDescription?: string;

  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;
}
