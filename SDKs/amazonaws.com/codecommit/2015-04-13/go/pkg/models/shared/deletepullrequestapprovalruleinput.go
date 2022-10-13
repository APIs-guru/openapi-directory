package shared

type DeletePullRequestApprovalRuleInput struct {
	ApprovalRuleName string `json:"approvalRuleName"`
	PullRequestID    string `json:"pullRequestId"`
}
