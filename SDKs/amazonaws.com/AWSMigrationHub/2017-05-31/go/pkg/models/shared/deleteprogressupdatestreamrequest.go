package shared

type DeleteProgressUpdateStreamRequest struct {
	DryRun                   *bool  `json:"DryRun,omitempty"`
	ProgressUpdateStreamName string `json:"ProgressUpdateStreamName"`
}
