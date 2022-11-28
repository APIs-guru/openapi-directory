import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns information about an approval rule template.
**/
export declare class ApprovalRuleTemplate extends SpeakeasyBase {
    approvalRuleTemplateContent?: string;
    approvalRuleTemplateDescription?: string;
    approvalRuleTemplateId?: string;
    approvalRuleTemplateName?: string;
    creationDate?: Date;
    lastModifiedDate?: Date;
    lastModifiedUser?: string;
    ruleContentSha256?: string;
}
