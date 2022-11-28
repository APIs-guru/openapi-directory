import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateApprovalRuleTemplateDescriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateDescription" })
  approvalRuleTemplateDescription: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;
}
