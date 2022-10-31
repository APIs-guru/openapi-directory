package shared



type ListPullRequestsInput struct {
    AuthorArn *string `json:"authorArn,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    PullRequestStatus *PullRequestStatusEnumEnum `json:"pullRequestStatus,omitempty"`
    RepositoryName string `json:"repositoryName"`
    
}

