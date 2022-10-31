package shared



type ListDatasetsResponse struct {
    DatasetSummaries []DatasetSummary `json:"datasetSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

