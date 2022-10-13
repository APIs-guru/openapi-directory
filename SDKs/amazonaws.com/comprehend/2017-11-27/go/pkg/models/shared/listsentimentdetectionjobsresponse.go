package shared

type ListSentimentDetectionJobsResponse struct {
	NextToken                           *string                           `json:"NextToken"`
	SentimentDetectionJobPropertiesList []SentimentDetectionJobProperties `json:"SentimentDetectionJobPropertiesList"`
}
