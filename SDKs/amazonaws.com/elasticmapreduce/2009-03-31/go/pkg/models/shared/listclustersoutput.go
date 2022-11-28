package shared

// ListClustersOutput
// This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.
type ListClustersOutput struct {
	Clusters []ClusterSummary `json:"Clusters,omitempty"`
	Marker   *string          `json:"Marker,omitempty"`
}
