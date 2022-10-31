package shared



type ListVirtualClustersResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    VirtualClusters []VirtualCluster `json:"virtualClusters,omitempty"`
    
}

