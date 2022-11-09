import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalRule } from "./approvalrule";


export class CreatePullRequestApprovalRuleOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRule" })
  approvalRule: ApprovalRule;
}
