package shared

type ListProgressUpdateStreamsResult struct {
	NextToken                       *string                       `json:"NextToken,omitempty"`
	ProgressUpdateStreamSummaryList []ProgressUpdateStreamSummary `json:"ProgressUpdateStreamSummaryList,omitempty"`
}
