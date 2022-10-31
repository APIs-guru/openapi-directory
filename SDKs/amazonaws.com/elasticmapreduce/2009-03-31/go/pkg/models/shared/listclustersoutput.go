package shared

type ListClustersOutput struct {
	Clusters []ClusterSummary `json:"Clusters,omitempty"`
	Marker   *string          `json:"Marker,omitempty"`
}
