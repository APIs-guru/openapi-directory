import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalRuleTemplate } from "./approvalruletemplate";


export class UpdateApprovalRuleTemplateDescriptionOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleTemplate" })
  approvalRuleTemplate: ApprovalRuleTemplate;
}
