package shared

// HTTPGatewayRouteAction
// An object that represents the action to take if a match is determined.
type HTTPGatewayRouteAction struct {
	Rewrite *HTTPGatewayRouteRewrite `json:"rewrite,omitempty"`
	Target  GatewayRouteTarget       `json:"target"`
}
