package shared

type GetCommentsForComparedCommitOutput struct {
	CommentsForComparedCommitData []CommentsForComparedCommit `json:"commentsForComparedCommitData,omitempty"`
	NextToken                     *string                     `json:"nextToken,omitempty"`
}
