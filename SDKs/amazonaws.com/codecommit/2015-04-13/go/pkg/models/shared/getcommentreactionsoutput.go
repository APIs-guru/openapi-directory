package shared

type GetCommentReactionsOutput struct {
	NextToken           *string              `json:"nextToken"`
	ReactionsForComment []ReactionForComment `json:"reactionsForComment"`
}
