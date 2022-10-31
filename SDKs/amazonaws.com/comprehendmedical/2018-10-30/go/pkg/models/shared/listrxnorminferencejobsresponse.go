package shared



type ListRxNormInferenceJobsResponse struct {
    ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties `json:"ComprehendMedicalAsyncJobPropertiesList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

