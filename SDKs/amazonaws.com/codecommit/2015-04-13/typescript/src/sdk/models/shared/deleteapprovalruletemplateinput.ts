import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApprovalRuleTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;
}
