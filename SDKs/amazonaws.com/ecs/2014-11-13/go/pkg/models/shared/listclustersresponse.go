package shared

type ListClustersResponse struct {
	ClusterArns []string `json:"clusterArns"`
	NextToken   *string  `json:"nextToken"`
}
