package shared



type ListDatasetsResponse struct {
    Datasets []DatasetSummary `json:"Datasets,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

