import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateApprovalRuleTemplateContentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;

  @SpeakeasyMetadata({ data: "json, name=existingRuleContentSha256" })
  existingRuleContentSha256?: string;

  @SpeakeasyMetadata({ data: "json, name=newRuleContent" })
  newRuleContent: string;
}
