package shared

type DescribeClustersRequest struct {
	ClusterNames []string `json:"ClusterNames"`
	MaxResults   *int64   `json:"MaxResults"`
	NextToken    *string  `json:"NextToken"`
}
