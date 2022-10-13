package shared

type GrpcGatewayRouteAction struct {
	Rewrite *GrpcGatewayRouteRewrite `json:"rewrite"`
	Target  GatewayRouteTarget       `json:"target"`
}
