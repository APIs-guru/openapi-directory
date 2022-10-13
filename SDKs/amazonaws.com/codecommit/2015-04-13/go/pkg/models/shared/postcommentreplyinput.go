package shared

type PostCommentReplyInput struct {
	ClientRequestToken *string `json:"clientRequestToken"`
	Content            string  `json:"content"`
	InReplyTo          string  `json:"inReplyTo"`
}
