import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePullRequestApprovalRuleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleContent" })
  approvalRuleContent: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleName" })
  approvalRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
