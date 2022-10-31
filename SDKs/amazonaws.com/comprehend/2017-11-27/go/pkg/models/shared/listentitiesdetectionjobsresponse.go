package shared



type ListEntitiesDetectionJobsResponse struct {
    EntitiesDetectionJobPropertiesList []EntitiesDetectionJobProperties `json:"EntitiesDetectionJobPropertiesList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

