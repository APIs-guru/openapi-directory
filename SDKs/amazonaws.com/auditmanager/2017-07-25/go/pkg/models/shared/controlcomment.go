package shared

import (
"time")

type ControlComment struct {
    AuthorName *string `json:"authorName,omitempty"`
    CommentBody *string `json:"commentBody,omitempty"`
    PostedDate *time.Time `json:"postedDate,omitempty"`
    
}

