package shared

type ListEntitiesDetectionV2JobsResponse struct {
	ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties `json:"ComprehendMedicalAsyncJobPropertiesList"`
	NextToken                               *string                               `json:"NextToken"`
}
