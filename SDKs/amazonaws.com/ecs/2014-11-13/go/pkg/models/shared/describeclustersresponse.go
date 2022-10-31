package shared



type DescribeClustersResponse struct {
    Clusters []Cluster `json:"clusters,omitempty"`
    Failures []Failure `json:"failures,omitempty"`
    
}

