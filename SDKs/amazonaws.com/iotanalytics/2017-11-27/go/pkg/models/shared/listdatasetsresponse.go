package shared

type ListDatasetsResponse struct {
	DatasetSummaries []DatasetSummary `json:"datasetSummaries"`
	NextToken        *string          `json:"nextToken"`
}
