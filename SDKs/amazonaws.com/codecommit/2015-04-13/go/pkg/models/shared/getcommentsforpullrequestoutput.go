package shared

type GetCommentsForPullRequestOutput struct {
	CommentsForPullRequestData []CommentsForPullRequest `json:"commentsForPullRequestData"`
	NextToken                  *string                  `json:"nextToken"`
}
