package shared

type ReactionForComment struct {
	Reaction                       *ReactionValueFormats `json:"reaction"`
	ReactionUsers                  []string              `json:"reactionUsers"`
	ReactionsFromDeletedUsersCount *int64                `json:"reactionsFromDeletedUsersCount"`
}
