import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginApprovalRuleTemplate } from "./originapprovalruletemplate";



// ApprovalRule
/** 
 * Returns information about an approval rule.
**/
export class ApprovalRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRuleContent" })
  approvalRuleContent?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleId" })
  approvalRuleId?: string;

  @SpeakeasyMetadata({ data: "json, name=approvalRuleName" })
  approvalRuleName?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedUser" })
  lastModifiedUser?: string;

  @SpeakeasyMetadata({ data: "json, name=originApprovalRuleTemplate" })
  originApprovalRuleTemplate?: OriginApprovalRuleTemplate;

  @SpeakeasyMetadata({ data: "json, name=ruleContentSha256" })
  ruleContentSha256?: string;
}
