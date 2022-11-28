import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApprovalRuleTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;
}
