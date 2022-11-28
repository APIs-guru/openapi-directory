package shared

// ListBootstrapActionsInput
// This input determines which bootstrap actions to retrieve.
type ListBootstrapActionsInput struct {
	ClusterID string  `json:"ClusterId"`
	Marker    *string `json:"Marker,omitempty"`
}
