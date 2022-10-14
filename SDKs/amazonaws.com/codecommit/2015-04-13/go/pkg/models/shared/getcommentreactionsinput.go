package shared

type GetCommentReactionsInput struct {
	CommentID       string  `json:"commentId"`
	MaxResults      *int64  `json:"maxResults,omitempty"`
	NextToken       *string `json:"nextToken,omitempty"`
	ReactionUserArn *string `json:"reactionUserArn,omitempty"`
}
