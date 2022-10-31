package shared

type ResetJobBookmarkRequest struct {
	JobName string  `json:"JobName"`
	RunID   *string `json:"RunId,omitempty"`
}
