package shared



type PostCommentForPullRequestOutput struct {
    AfterBlobID *string `json:"afterBlobId,omitempty"`
    AfterCommitID *string `json:"afterCommitId,omitempty"`
    BeforeBlobID *string `json:"beforeBlobId,omitempty"`
    BeforeCommitID *string `json:"beforeCommitId,omitempty"`
    Comment *Comment `json:"comment,omitempty"`
    Location *Location `json:"location,omitempty"`
    PullRequestID *string `json:"pullRequestId,omitempty"`
    RepositoryName *string `json:"repositoryName,omitempty"`
    
}

