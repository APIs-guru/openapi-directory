package shared



type ListIcd10CmInferenceJobsResponse struct {
    ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties `json:"ComprehendMedicalAsyncJobPropertiesList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

