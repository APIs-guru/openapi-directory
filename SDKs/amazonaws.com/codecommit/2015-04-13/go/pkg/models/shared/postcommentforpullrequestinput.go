package shared



type PostCommentForPullRequestInput struct {
    AfterCommitID string `json:"afterCommitId"`
    BeforeCommitID string `json:"beforeCommitId"`
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    Content string `json:"content"`
    Location *Location `json:"location,omitempty"`
    PullRequestID string `json:"pullRequestId"`
    RepositoryName string `json:"repositoryName"`
    
}

