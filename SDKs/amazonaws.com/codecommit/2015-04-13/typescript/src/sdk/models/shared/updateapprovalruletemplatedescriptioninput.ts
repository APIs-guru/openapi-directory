import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateApprovalRuleTemplateDescriptionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateDescription" })
  approvalRuleTemplateDescription: string;

  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;
}
