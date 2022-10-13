package shared

type CreateProgressUpdateStreamRequest struct {
	DryRun                   *bool  `json:"DryRun"`
	ProgressUpdateStreamName string `json:"ProgressUpdateStreamName"`
}
