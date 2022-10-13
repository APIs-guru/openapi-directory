package shared

type ListIcd10CmInferenceJobsResponse struct {
	ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties `json:"ComprehendMedicalAsyncJobPropertiesList"`
	NextToken                               *string                               `json:"NextToken"`
}
