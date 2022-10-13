package shared

type GetCommentReactionsInput struct {
	CommentID       string  `json:"commentId"`
	MaxResults      *int64  `json:"maxResults"`
	NextToken       *string `json:"nextToken"`
	ReactionUserArn *string `json:"reactionUserArn"`
}
