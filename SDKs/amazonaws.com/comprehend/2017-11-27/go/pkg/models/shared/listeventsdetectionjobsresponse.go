package shared

type ListEventsDetectionJobsResponse struct {
	EventsDetectionJobPropertiesList []EventsDetectionJobProperties `json:"EventsDetectionJobPropertiesList"`
	NextToken                        *string                        `json:"NextToken"`
}
