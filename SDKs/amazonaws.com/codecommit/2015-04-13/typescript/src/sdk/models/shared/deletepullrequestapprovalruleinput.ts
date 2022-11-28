import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePullRequestApprovalRuleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleName" })
  approvalRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
