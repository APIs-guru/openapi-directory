import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApprovalRuleTemplateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;
}
