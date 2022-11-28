import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateApprovalRuleTemplateContentInput extends SpeakeasyBase {
    approvalRuleTemplateName: string;
    existingRuleContentSha256?: string;
    newRuleContent: string;
}
