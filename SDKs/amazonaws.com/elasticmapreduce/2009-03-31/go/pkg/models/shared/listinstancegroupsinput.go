package shared

// ListInstanceGroupsInput
// This input determines which instance groups to retrieve.
type ListInstanceGroupsInput struct {
	ClusterID string  `json:"ClusterId"`
	Marker    *string `json:"Marker,omitempty"`
}
