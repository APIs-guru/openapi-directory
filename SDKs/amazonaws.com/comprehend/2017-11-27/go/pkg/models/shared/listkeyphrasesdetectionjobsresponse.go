package shared

type ListKeyPhrasesDetectionJobsResponse struct {
	KeyPhrasesDetectionJobPropertiesList []KeyPhrasesDetectionJobProperties `json:"KeyPhrasesDetectionJobPropertiesList"`
	NextToken                            *string                            `json:"NextToken"`
}
