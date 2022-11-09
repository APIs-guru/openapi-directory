import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalRuleTemplate } from "./approvalruletemplate";


export class UpdateApprovalRuleTemplateNameOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplate" })
  approvalRuleTemplate: ApprovalRuleTemplate;
}
