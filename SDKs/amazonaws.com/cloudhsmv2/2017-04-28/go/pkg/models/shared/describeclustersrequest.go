package shared



type DescribeClustersRequest struct {
    Filters map[string][]string `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

