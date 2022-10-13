package shared

type ListBootstrapActionsOutput struct {
	BootstrapActions []Command `json:"BootstrapActions"`
	Marker           *string   `json:"Marker"`
}
