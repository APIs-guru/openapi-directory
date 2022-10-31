package shared



type DescribeClustersRequest struct {
    ClusterNames []string `json:"ClusterNames,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

