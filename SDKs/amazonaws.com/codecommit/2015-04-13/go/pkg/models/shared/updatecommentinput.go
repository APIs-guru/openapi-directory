package shared

type UpdateCommentInput struct {
	CommentID string `json:"commentId"`
	Content   string `json:"content"`
}
