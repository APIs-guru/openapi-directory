package shared

type OverridePullRequestApprovalRulesInput struct {
	OverrideStatus OverrideStatusEnum `json:"overrideStatus"`
	PullRequestID  string             `json:"pullRequestId"`
	RevisionID     string             `json:"revisionId"`
}
