package shared

// HTTPGatewayRoute
// An object that represents an HTTP gateway route.
type HTTPGatewayRoute struct {
	Action HTTPGatewayRouteAction `json:"action"`
	Match  HTTPGatewayRouteMatch  `json:"match"`
}
