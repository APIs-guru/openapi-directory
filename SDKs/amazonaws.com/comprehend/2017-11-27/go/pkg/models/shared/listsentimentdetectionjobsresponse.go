package shared



type ListSentimentDetectionJobsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    SentimentDetectionJobPropertiesList []SentimentDetectionJobProperties `json:"SentimentDetectionJobPropertiesList,omitempty"`
    
}

