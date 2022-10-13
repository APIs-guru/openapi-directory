package shared

type ListPiiEntitiesDetectionJobsResponse struct {
	NextToken                             *string                             `json:"NextToken"`
	PiiEntitiesDetectionJobPropertiesList []PiiEntitiesDetectionJobProperties `json:"PiiEntitiesDetectionJobPropertiesList"`
}
