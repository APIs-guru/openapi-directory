package shared

type GetCommentsForComparedCommitOutput struct {
	CommentsForComparedCommitData []CommentsForComparedCommit `json:"commentsForComparedCommitData"`
	NextToken                     *string                     `json:"nextToken"`
}
