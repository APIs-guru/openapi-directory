package shared



type ListRxNormInferenceJobsRequest struct {
    Filter *ComprehendMedicalAsyncJobFilter `json:"Filter,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

