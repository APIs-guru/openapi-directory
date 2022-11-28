import { SpeakeasyBase } from "../../../internal/utils";
import { OriginApprovalRuleTemplate } from "./originapprovalruletemplate";
/**
 * Returns information about an approval rule.
**/
export declare class ApprovalRule extends SpeakeasyBase {
    approvalRuleContent?: string;
    approvalRuleId?: string;
    approvalRuleName?: string;
    creationDate?: Date;
    lastModifiedDate?: Date;
    lastModifiedUser?: string;
    originApprovalRuleTemplate?: OriginApprovalRuleTemplate;
    ruleContentSha256?: string;
}
