package shared



type ListTopicsDetectionJobsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TopicsDetectionJobPropertiesList []TopicsDetectionJobProperties `json:"TopicsDetectionJobPropertiesList,omitempty"`
    
}

