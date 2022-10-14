package shared

type ListBootstrapActionsOutput struct {
	BootstrapActions []Command `json:"BootstrapActions,omitempty"`
	Marker           *string   `json:"Marker,omitempty"`
}
