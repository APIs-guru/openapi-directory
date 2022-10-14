package shared

type ReactionForComment struct {
	Reaction                       *ReactionValueFormats `json:"reaction,omitempty"`
	ReactionUsers                  []string              `json:"reactionUsers,omitempty"`
	ReactionsFromDeletedUsersCount *int64                `json:"reactionsFromDeletedUsersCount,omitempty"`
}
