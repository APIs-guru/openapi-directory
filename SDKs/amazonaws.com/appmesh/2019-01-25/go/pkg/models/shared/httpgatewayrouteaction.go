package shared

type HTTPGatewayRouteAction struct {
	Rewrite *HTTPGatewayRouteRewrite `json:"rewrite"`
	Target  GatewayRouteTarget       `json:"target"`
}
