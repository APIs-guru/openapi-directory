import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalRuleTemplate } from "./approvalruletemplate";



export class UpdateApprovalRuleTemplateNameOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleTemplate" })
  approvalRuleTemplate: ApprovalRuleTemplate;
}
