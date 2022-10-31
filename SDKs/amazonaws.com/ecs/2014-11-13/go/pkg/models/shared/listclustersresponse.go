package shared



type ListClustersResponse struct {
    ClusterArns []string `json:"clusterArns,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

