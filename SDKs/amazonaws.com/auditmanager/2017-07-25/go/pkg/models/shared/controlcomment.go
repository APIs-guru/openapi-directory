package shared

import (
	"time"
)

// ControlComment
//
//	A comment posted by a user on a control. This includes the author's name, the comment text, and a timestamp.
type ControlComment struct {
	AuthorName  *string    `json:"authorName,omitempty"`
	CommentBody *string    `json:"commentBody,omitempty"`
	PostedDate  *time.Time `json:"postedDate,omitempty"`
}
