package shared



type ListPhiDetectionJobsResponse struct {
    ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties `json:"ComprehendMedicalAsyncJobPropertiesList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

