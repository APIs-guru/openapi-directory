package shared

type ListGatewayRoutesOutput struct {
	GatewayRoutes []GatewayRouteRef `json:"gatewayRoutes"`
	NextToken     *string           `json:"nextToken"`
}
