package shared

// ListBootstrapActionsOutput
// This output contains the bootstrap actions detail.
type ListBootstrapActionsOutput struct {
	BootstrapActions []Command `json:"BootstrapActions,omitempty"`
	Marker           *string   `json:"Marker,omitempty"`
}
