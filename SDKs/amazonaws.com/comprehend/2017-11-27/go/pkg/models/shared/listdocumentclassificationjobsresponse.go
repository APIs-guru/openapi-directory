package shared

type ListDocumentClassificationJobsResponse struct {
	DocumentClassificationJobPropertiesList []DocumentClassificationJobProperties `json:"DocumentClassificationJobPropertiesList"`
	NextToken                               *string                               `json:"NextToken"`
}
