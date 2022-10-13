package shared

type ListEntitiesDetectionJobsResponse struct {
	EntitiesDetectionJobPropertiesList []EntitiesDetectionJobProperties `json:"EntitiesDetectionJobPropertiesList"`
	NextToken                          *string                          `json:"NextToken"`
}
