package shared

type GetPullRequestOverrideStateInput struct {
	PullRequestID string `json:"pullRequestId"`
	RevisionID    string `json:"revisionId"`
}
