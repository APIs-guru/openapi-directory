package shared

type GatewayResponses struct {
	Items    []GatewayResponse `json:"items,omitempty"`
	Position *string           `json:"position,omitempty"`
}
