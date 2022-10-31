package shared



type PostCommentReplyInput struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    Content string `json:"content"`
    InReplyTo string `json:"inReplyTo"`
    
}

