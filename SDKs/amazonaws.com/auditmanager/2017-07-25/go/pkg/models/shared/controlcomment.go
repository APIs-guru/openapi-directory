package shared

import (
	"time"
)

type ControlComment struct {
	AuthorName  *string    `json:"authorName"`
	CommentBody *string    `json:"commentBody"`
	PostedDate  *time.Time `json:"postedDate"`
}
