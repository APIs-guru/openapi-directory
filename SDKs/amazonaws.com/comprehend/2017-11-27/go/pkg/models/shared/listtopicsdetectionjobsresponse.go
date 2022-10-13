package shared

type ListTopicsDetectionJobsResponse struct {
	NextToken                        *string                        `json:"NextToken"`
	TopicsDetectionJobPropertiesList []TopicsDetectionJobProperties `json:"TopicsDetectionJobPropertiesList"`
}
