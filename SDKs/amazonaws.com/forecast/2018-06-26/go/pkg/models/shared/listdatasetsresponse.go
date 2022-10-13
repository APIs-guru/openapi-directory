package shared

type ListDatasetsResponse struct {
	Datasets  []DatasetSummary `json:"Datasets"`
	NextToken *string          `json:"NextToken"`
}
