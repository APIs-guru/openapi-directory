package shared

type DescribeClustersResponse struct {
	Clusters []Cluster `json:"clusters"`
	Failures []Failure `json:"failures"`
}
