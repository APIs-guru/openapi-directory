package shared

type UpdatePullRequestDescriptionInput struct {
	Description   string `json:"description"`
	PullRequestID string `json:"pullRequestId"`
}
