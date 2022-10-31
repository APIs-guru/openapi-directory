package shared

type ListDominantLanguageDetectionJobsRequest struct {
	Filter     *DominantLanguageDetectionJobFilter `json:"Filter,omitempty"`
	MaxResults *int64                              `json:"MaxResults,omitempty"`
	NextToken  *string                             `json:"NextToken,omitempty"`
}
