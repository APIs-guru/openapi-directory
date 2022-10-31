package shared



type GrpcGatewayRouteAction struct {
    Rewrite *GrpcGatewayRouteRewrite `json:"rewrite,omitempty"`
    Target GatewayRouteTarget `json:"target"`
    
}

