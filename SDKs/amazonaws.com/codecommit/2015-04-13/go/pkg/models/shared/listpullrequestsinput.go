package shared

type ListPullRequestsInput struct {
	AuthorArn         *string                    `json:"authorArn"`
	MaxResults        *int64                     `json:"maxResults"`
	NextToken         *string                    `json:"nextToken"`
	PullRequestStatus *PullRequestStatusEnumEnum `json:"pullRequestStatus"`
	RepositoryName    string                     `json:"repositoryName"`
}
