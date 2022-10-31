package shared

type ListInstanceGroupsInput struct {
	ClusterID string  `json:"ClusterId"`
	Marker    *string `json:"Marker,omitempty"`
}
