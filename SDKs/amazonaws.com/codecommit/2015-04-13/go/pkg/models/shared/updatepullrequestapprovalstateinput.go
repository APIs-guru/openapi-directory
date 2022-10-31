package shared



type UpdatePullRequestApprovalStateInput struct {
    ApprovalState ApprovalStateEnum `json:"approvalState"`
    PullRequestID string `json:"pullRequestId"`
    RevisionID string `json:"revisionId"`
    
}

