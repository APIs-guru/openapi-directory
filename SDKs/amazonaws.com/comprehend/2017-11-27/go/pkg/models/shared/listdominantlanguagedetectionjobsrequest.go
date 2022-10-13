package shared

type ListDominantLanguageDetectionJobsRequest struct {
	Filter     *DominantLanguageDetectionJobFilter `json:"Filter"`
	MaxResults *int64                              `json:"MaxResults"`
	NextToken  *string                             `json:"NextToken"`
}
