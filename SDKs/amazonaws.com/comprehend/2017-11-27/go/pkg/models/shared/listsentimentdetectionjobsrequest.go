package shared

type ListSentimentDetectionJobsRequest struct {
	Filter     *SentimentDetectionJobFilter `json:"Filter"`
	MaxResults *int64                       `json:"MaxResults"`
	NextToken  *string                      `json:"NextToken"`
}
