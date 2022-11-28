import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePullRequestApprovalRuleContentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleName" })
  approvalRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=existingRuleContentSha256" })
  existingRuleContentSha256?: string;

  @SpeakeasyMetadata({ data: "json, name=newRuleContent" })
  newRuleContent: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
