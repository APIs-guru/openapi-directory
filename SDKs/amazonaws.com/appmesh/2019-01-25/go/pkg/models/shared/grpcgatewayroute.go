package shared

// GrpcGatewayRoute
// An object that represents a gRPC gateway route.
type GrpcGatewayRoute struct {
	Action GrpcGatewayRouteAction `json:"action"`
	Match  GrpcGatewayRouteMatch  `json:"match"`
}
