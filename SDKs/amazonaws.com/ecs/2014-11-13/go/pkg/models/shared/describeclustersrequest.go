package shared

type DescribeClustersRequest struct {
	Clusters []string           `json:"clusters"`
	Include  []ClusterFieldEnum `json:"include"`
}
