package shared

type DeleteProgressUpdateStreamRequest struct {
	DryRun                   *bool  `json:"DryRun"`
	ProgressUpdateStreamName string `json:"ProgressUpdateStreamName"`
}
