import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePullRequestApprovalRuleOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleId" })
  approvalRuleId: string;
}
