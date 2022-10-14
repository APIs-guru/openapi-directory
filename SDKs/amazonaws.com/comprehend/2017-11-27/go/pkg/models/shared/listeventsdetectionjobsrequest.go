package shared

type ListEventsDetectionJobsRequest struct {
	Filter     *EventsDetectionJobFilter `json:"Filter,omitempty"`
	MaxResults *int64                    `json:"MaxResults,omitempty"`
	NextToken  *string                   `json:"NextToken,omitempty"`
}
