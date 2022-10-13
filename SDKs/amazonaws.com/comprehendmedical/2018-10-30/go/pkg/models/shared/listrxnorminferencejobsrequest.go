package shared

type ListRxNormInferenceJobsRequest struct {
	Filter     *ComprehendMedicalAsyncJobFilter `json:"Filter"`
	MaxResults *int64                           `json:"MaxResults"`
	NextToken  *string                          `json:"NextToken"`
}
