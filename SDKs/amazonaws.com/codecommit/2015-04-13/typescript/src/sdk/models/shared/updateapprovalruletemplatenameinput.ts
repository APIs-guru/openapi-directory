import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateApprovalRuleTemplateNameInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=newApprovalRuleTemplateName" })
  newApprovalRuleTemplateName: string;

  @Metadata({ data: "json, name=oldApprovalRuleTemplateName" })
  oldApprovalRuleTemplateName: string;
}
