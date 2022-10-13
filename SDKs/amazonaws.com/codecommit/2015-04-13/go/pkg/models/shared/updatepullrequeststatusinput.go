package shared

type UpdatePullRequestStatusInput struct {
	PullRequestID     string                    `json:"pullRequestId"`
	PullRequestStatus PullRequestStatusEnumEnum `json:"pullRequestStatus"`
}
