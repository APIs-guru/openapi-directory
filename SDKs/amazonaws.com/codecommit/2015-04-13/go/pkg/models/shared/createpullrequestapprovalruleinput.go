package shared



type CreatePullRequestApprovalRuleInput struct {
    ApprovalRuleContent string `json:"approvalRuleContent"`
    ApprovalRuleName string `json:"approvalRuleName"`
    PullRequestID string `json:"pullRequestId"`
    
}

