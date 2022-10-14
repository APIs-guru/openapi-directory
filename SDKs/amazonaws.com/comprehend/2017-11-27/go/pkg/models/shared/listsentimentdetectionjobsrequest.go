package shared

type ListSentimentDetectionJobsRequest struct {
	Filter     *SentimentDetectionJobFilter `json:"Filter,omitempty"`
	MaxResults *int64                       `json:"MaxResults,omitempty"`
	NextToken  *string                      `json:"NextToken,omitempty"`
}
