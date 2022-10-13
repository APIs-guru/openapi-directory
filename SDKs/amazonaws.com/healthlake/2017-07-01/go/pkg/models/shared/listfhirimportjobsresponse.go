package shared

type ListFhirImportJobsResponse struct {
	ImportJobPropertiesList []ImportJobProperties `json:"ImportJobPropertiesList"`
	NextToken               *string               `json:"NextToken"`
}
