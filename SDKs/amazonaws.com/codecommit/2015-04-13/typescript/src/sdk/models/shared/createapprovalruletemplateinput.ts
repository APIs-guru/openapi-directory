import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApprovalRuleTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateContent" })
  approvalRuleTemplateContent: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateDescription" })
  approvalRuleTemplateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;
}
