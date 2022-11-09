import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateApprovalRuleTemplateContentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplateName" })
  approvalRuleTemplateName: string;

  @Metadata({ data: "json, name=existingRuleContentSha256" })
  existingRuleContentSha256?: string;

  @Metadata({ data: "json, name=newRuleContent" })
  newRuleContent: string;
}
