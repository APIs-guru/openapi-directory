package shared

type ListDocumentClassifiersResponse struct {
	DocumentClassifierPropertiesList []DocumentClassifierProperties `json:"DocumentClassifierPropertiesList"`
	NextToken                        *string                        `json:"NextToken"`
}
