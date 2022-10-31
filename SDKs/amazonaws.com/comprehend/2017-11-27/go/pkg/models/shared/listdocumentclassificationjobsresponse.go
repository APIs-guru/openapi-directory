package shared

type ListDocumentClassificationJobsResponse struct {
	DocumentClassificationJobPropertiesList []DocumentClassificationJobProperties `json:"DocumentClassificationJobPropertiesList,omitempty"`
	NextToken                               *string                               `json:"NextToken,omitempty"`
}
