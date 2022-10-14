package shared

type ListTopicsDetectionJobsRequest struct {
	Filter     *TopicsDetectionJobFilter `json:"Filter,omitempty"`
	MaxResults *int64                    `json:"MaxResults,omitempty"`
	NextToken  *string                   `json:"NextToken,omitempty"`
}
