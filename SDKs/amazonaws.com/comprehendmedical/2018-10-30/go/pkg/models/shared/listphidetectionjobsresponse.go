package shared

type ListPhiDetectionJobsResponse struct {
	ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties `json:"ComprehendMedicalAsyncJobPropertiesList"`
	NextToken                               *string                               `json:"NextToken"`
}
