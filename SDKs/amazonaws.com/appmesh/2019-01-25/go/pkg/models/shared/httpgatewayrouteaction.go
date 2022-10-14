package shared

type HTTPGatewayRouteAction struct {
	Rewrite *HTTPGatewayRouteRewrite `json:"rewrite,omitempty"`
	Target  GatewayRouteTarget       `json:"target"`
}
