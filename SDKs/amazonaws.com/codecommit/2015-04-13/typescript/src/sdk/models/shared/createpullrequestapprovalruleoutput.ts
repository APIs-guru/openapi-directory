import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalRule } from "./approvalrule";



export class CreatePullRequestApprovalRuleOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRule" })
  approvalRule: ApprovalRule;
}
