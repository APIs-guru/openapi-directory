package shared

type HTTPGatewayRoute struct {
	Action HTTPGatewayRouteAction `json:"action"`
	Match  HTTPGatewayRouteMatch  `json:"match"`
}
