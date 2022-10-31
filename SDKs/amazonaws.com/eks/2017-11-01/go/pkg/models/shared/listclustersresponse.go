package shared



type ListClustersResponse struct {
    Clusters []string `json:"clusters,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

