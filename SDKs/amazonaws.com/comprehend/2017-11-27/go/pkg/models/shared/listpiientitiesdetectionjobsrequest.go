package shared

type ListPiiEntitiesDetectionJobsRequest struct {
	Filter     *PiiEntitiesDetectionJobFilter `json:"Filter"`
	MaxResults *int64                         `json:"MaxResults"`
	NextToken  *string                        `json:"NextToken"`
}
