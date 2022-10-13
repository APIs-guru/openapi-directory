package shared

type ListFhirExportJobsResponse struct {
	ExportJobPropertiesList []ExportJobProperties `json:"ExportJobPropertiesList"`
	NextToken               *string               `json:"NextToken"`
}
