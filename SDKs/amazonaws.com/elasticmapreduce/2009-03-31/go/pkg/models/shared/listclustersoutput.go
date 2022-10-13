package shared

type ListClustersOutput struct {
	Clusters []ClusterSummary `json:"Clusters"`
	Marker   *string          `json:"Marker"`
}
