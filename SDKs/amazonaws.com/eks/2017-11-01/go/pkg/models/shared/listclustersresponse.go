package shared

type ListClustersResponse struct {
	Clusters  []string `json:"clusters"`
	NextToken *string  `json:"nextToken"`
}
