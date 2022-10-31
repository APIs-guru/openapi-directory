package shared



type DescribeClustersRequest struct {
    Clusters []string `json:"clusters,omitempty"`
    Include []ClusterFieldEnum `json:"include,omitempty"`
    
}

