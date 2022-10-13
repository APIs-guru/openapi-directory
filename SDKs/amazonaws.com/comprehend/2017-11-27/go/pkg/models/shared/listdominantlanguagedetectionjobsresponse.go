package shared

type ListDominantLanguageDetectionJobsResponse struct {
	DominantLanguageDetectionJobPropertiesList []DominantLanguageDetectionJobProperties `json:"DominantLanguageDetectionJobPropertiesList"`
	NextToken                                  *string                                  `json:"NextToken"`
}
