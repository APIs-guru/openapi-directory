import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalRule } from "./approvalrule";



export class UpdatePullRequestApprovalRuleContentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRule" })
  approvalRule: ApprovalRule;
}
