package shared



type ListDatasetContentsResponse struct {
    DatasetContentSummaries []DatasetContentSummary `json:"datasetContentSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

