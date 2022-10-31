package shared

type Predecessor struct {
	JobName *string `json:"JobName,omitempty"`
	RunID   *string `json:"RunId,omitempty"`
}
