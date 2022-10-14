package shared

type ListIcd10CmInferenceJobsRequest struct {
	Filter     *ComprehendMedicalAsyncJobFilter `json:"Filter,omitempty"`
	MaxResults *int64                           `json:"MaxResults,omitempty"`
	NextToken  *string                          `json:"NextToken,omitempty"`
}
