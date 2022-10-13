package shared

type ListEventsDetectionJobsRequest struct {
	Filter     *EventsDetectionJobFilter `json:"Filter"`
	MaxResults *int64                    `json:"MaxResults"`
	NextToken  *string                   `json:"NextToken"`
}
