package shared

type ListEntitiesDetectionJobsRequest struct {
	Filter     *EntitiesDetectionJobFilter `json:"Filter"`
	MaxResults *int64                      `json:"MaxResults"`
	NextToken  *string                     `json:"NextToken"`
}
