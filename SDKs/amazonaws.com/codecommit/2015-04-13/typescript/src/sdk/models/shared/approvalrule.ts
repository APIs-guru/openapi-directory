import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OriginApprovalRuleTemplate } from "./originapprovalruletemplate";


// ApprovalRule
/** 
 * Returns information about an approval rule.
**/
export class ApprovalRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRuleContent" })
  approvalRuleContent?: string;

  @Metadata({ data: "json, name=approvalRuleId" })
  approvalRuleId?: string;

  @Metadata({ data: "json, name=approvalRuleName" })
  approvalRuleName?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @Metadata({ data: "json, name=lastModifiedUser" })
  lastModifiedUser?: string;

  @Metadata({ data: "json, name=originApprovalRuleTemplate" })
  originApprovalRuleTemplate?: OriginApprovalRuleTemplate;

  @Metadata({ data: "json, name=ruleContentSha256" })
  ruleContentSha256?: string;
}
