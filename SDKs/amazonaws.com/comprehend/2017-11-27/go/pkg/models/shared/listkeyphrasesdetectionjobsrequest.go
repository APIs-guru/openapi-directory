package shared

type ListKeyPhrasesDetectionJobsRequest struct {
	Filter     *KeyPhrasesDetectionJobFilter `json:"Filter"`
	MaxResults *int64                        `json:"MaxResults"`
	NextToken  *string                       `json:"NextToken"`
}
