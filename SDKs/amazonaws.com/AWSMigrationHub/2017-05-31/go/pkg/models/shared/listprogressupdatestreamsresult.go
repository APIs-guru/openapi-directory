package shared

type ListProgressUpdateStreamsResult struct {
	NextToken                       *string                       `json:"NextToken"`
	ProgressUpdateStreamSummaryList []ProgressUpdateStreamSummary `json:"ProgressUpdateStreamSummaryList"`
}
