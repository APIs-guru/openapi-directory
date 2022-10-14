package shared

type ListPiiEntitiesDetectionJobsRequest struct {
	Filter     *PiiEntitiesDetectionJobFilter `json:"Filter,omitempty"`
	MaxResults *int64                         `json:"MaxResults,omitempty"`
	NextToken  *string                        `json:"NextToken,omitempty"`
}
