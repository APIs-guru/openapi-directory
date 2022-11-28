package shared

// ReactionForComment
// Information about the reaction values provided by users on a comment.
type ReactionForComment struct {
	Reaction                       *ReactionValueFormats `json:"reaction,omitempty"`
	ReactionUsers                  []string              `json:"reactionUsers,omitempty"`
	ReactionsFromDeletedUsersCount *int64                `json:"reactionsFromDeletedUsersCount,omitempty"`
}
