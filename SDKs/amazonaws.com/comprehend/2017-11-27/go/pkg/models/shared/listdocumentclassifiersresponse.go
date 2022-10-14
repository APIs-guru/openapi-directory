package shared

type ListDocumentClassifiersResponse struct {
	DocumentClassifierPropertiesList []DocumentClassifierProperties `json:"DocumentClassifierPropertiesList,omitempty"`
	NextToken                        *string                        `json:"NextToken,omitempty"`
}
