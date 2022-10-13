package shared

type ListTopicsDetectionJobsRequest struct {
	Filter     *TopicsDetectionJobFilter `json:"Filter"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
}
