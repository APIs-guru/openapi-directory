package shared

type ListEntitiesDetectionV2JobsResponse struct {
	ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties `json:"ComprehendMedicalAsyncJobPropertiesList,omitempty"`
	NextToken                               *string                               `json:"NextToken,omitempty"`
}
