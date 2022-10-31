package shared

type GetCommentReactionsOutput struct {
	NextToken           *string              `json:"nextToken,omitempty"`
	ReactionsForComment []ReactionForComment `json:"reactionsForComment"`
}
