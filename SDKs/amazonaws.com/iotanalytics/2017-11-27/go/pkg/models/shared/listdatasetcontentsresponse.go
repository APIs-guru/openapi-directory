package shared

type ListDatasetContentsResponse struct {
	DatasetContentSummaries []DatasetContentSummary `json:"datasetContentSummaries"`
	NextToken               *string                 `json:"nextToken"`
}
