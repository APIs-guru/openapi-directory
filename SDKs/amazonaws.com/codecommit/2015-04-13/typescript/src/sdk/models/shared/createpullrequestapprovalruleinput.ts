import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePullRequestApprovalRuleInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleContent" })
  approvalRuleContent: string;

  @Metadata({ data: "json, name=approvalRuleName" })
  approvalRuleName: string;

  @Metadata({ data: "json, name=pullRequestId" })
  pullRequestId: string;
}
