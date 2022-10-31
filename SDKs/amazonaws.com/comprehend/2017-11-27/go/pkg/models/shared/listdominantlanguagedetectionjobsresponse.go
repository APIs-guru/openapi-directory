package shared

type ListDominantLanguageDetectionJobsResponse struct {
	DominantLanguageDetectionJobPropertiesList []DominantLanguageDetectionJobProperties `json:"DominantLanguageDetectionJobPropertiesList,omitempty"`
	NextToken                                  *string                                  `json:"NextToken,omitempty"`
}
