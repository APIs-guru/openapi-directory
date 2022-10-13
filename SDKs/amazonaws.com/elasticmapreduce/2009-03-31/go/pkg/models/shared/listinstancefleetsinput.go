package shared

type ListInstanceFleetsInput struct {
	ClusterID string  `json:"ClusterId"`
	Marker    *string `json:"Marker"`
}
