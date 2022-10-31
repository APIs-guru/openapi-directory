package shared



type ListPiiEntitiesDetectionJobsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    PiiEntitiesDetectionJobPropertiesList []PiiEntitiesDetectionJobProperties `json:"PiiEntitiesDetectionJobPropertiesList,omitempty"`
    
}

