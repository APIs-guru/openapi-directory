package shared

import (
	"time"
)

type Comment struct {
	AuthorArn          *string          `json:"authorArn"`
	CallerReactions    []string         `json:"callerReactions"`
	ClientRequestToken *string          `json:"clientRequestToken"`
	CommentID          *string          `json:"commentId"`
	Content            *string          `json:"content"`
	CreationDate       *time.Time       `json:"creationDate"`
	Deleted            *bool            `json:"deleted"`
	InReplyTo          *string          `json:"inReplyTo"`
	LastModifiedDate   *time.Time       `json:"lastModifiedDate"`
	ReactionCounts     map[string]int64 `json:"reactionCounts"`
}
