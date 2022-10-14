package shared

type MergePullRequestByFastForwardInput struct {
	PullRequestID  string  `json:"pullRequestId"`
	RepositoryName string  `json:"repositoryName"`
	SourceCommitID *string `json:"sourceCommitId,omitempty"`
}
