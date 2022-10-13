package shared

type GatewayResponses struct {
	Items    []GatewayResponse `json:"items"`
	Position *string           `json:"position"`
}
