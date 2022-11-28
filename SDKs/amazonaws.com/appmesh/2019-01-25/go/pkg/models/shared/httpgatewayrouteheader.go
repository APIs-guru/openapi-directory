package shared

// HTTPGatewayRouteHeader
// An object that represents the HTTP header in the gateway route.
type HTTPGatewayRouteHeader struct {
	Invert *bool              `json:"invert,omitempty"`
	Match  *HeaderMatchMethod `json:"match,omitempty"`
	Name   string             `json:"name"`
}
