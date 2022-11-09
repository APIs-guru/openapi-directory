import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePullRequestApprovalRuleContentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleName" })
  approvalRuleName: string;

  @Metadata({ data: "json, name=existingRuleContentSha256" })
  existingRuleContentSha256?: string;

  @Metadata({ data: "json, name=newRuleContent" })
  newRuleContent: string;

  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
