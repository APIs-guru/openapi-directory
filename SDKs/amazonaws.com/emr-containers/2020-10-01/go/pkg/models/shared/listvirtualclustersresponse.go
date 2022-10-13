package shared

type ListVirtualClustersResponse struct {
	NextToken       *string          `json:"nextToken"`
	VirtualClusters []VirtualCluster `json:"virtualClusters"`
}
