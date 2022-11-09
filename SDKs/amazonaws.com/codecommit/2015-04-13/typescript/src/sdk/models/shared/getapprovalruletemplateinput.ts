import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApprovalRuleTemplateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;
}
