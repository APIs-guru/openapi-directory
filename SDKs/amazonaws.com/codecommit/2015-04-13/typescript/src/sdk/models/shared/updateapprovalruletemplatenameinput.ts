import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateApprovalRuleTemplateNameInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newApprovalRuleTemplateName" })
  newApprovalRuleTemplateName: string;

  @SpeakeasyMetadata({ data: "json, name=oldApprovalRuleTemplateName" })
  oldApprovalRuleTemplateName: string;
}
