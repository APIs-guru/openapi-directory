package shared



type UpdatePullRequestApprovalRuleContentInput struct {
    ApprovalRuleName string `json:"approvalRuleName"`
    ExistingRuleContentSha256 *string `json:"existingRuleContentSha256,omitempty"`
    NewRuleContent string `json:"newRuleContent"`
    PullRequestID string `json:"pullRequestId"`
    
}

