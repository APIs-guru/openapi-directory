import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePullRequestApprovalRuleContentInput extends SpeakeasyBase {
    approvalRuleName: string;
    existingRuleContentSha256?: string;
    newRuleContent: string;
    pullRequestId: string;
}
