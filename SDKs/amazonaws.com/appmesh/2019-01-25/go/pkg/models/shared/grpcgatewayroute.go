package shared



type GrpcGatewayRoute struct {
    Action GrpcGatewayRouteAction `json:"action"`
    Match GrpcGatewayRouteMatch `json:"match"`
    
}

