package shared

// GrpcGatewayRouteAction
// An object that represents the action to take if a match is determined.
type GrpcGatewayRouteAction struct {
	Rewrite *GrpcGatewayRouteRewrite `json:"rewrite,omitempty"`
	Target  GatewayRouteTarget       `json:"target"`
}
