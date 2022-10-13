package shared

type ListRxNormInferenceJobsResponse struct {
	ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties `json:"ComprehendMedicalAsyncJobPropertiesList"`
	NextToken                               *string                               `json:"NextToken"`
}
