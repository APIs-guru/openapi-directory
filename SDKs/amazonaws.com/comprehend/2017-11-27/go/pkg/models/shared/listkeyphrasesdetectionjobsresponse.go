package shared

type ListKeyPhrasesDetectionJobsResponse struct {
	KeyPhrasesDetectionJobPropertiesList []KeyPhrasesDetectionJobProperties `json:"KeyPhrasesDetectionJobPropertiesList,omitempty"`
	NextToken                            *string                            `json:"NextToken,omitempty"`
}
