package shared

type GetCommentsForPullRequestOutput struct {
	CommentsForPullRequestData []CommentsForPullRequest `json:"commentsForPullRequestData,omitempty"`
	NextToken                  *string                  `json:"nextToken,omitempty"`
}
