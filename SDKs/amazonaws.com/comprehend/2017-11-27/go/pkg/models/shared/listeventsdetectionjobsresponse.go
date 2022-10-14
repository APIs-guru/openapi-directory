package shared

type ListEventsDetectionJobsResponse struct {
	EventsDetectionJobPropertiesList []EventsDetectionJobProperties `json:"EventsDetectionJobPropertiesList,omitempty"`
	NextToken                        *string                        `json:"NextToken,omitempty"`
}
