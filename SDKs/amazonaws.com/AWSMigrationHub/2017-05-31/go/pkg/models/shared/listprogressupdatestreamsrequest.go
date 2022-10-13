package shared

type ListProgressUpdateStreamsRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
