package shared

import (
"time")

type Comment struct {
    AuthorArn *string `json:"authorArn,omitempty"`
    CallerReactions []string `json:"callerReactions,omitempty"`
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    CommentID *string `json:"commentId,omitempty"`
    Content *string `json:"content,omitempty"`
    CreationDate *time.Time `json:"creationDate,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    InReplyTo *string `json:"inReplyTo,omitempty"`
    LastModifiedDate *time.Time `json:"lastModifiedDate,omitempty"`
    ReactionCounts map[string]int64 `json:"reactionCounts,omitempty"`
    
}

