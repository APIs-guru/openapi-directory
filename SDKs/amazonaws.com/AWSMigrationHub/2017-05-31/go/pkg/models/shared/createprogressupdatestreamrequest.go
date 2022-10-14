package shared

type CreateProgressUpdateStreamRequest struct {
	DryRun                   *bool  `json:"DryRun,omitempty"`
	ProgressUpdateStreamName string `json:"ProgressUpdateStreamName"`
}
