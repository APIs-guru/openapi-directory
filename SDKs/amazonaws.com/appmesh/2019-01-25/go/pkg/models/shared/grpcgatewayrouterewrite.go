package shared

// GrpcGatewayRouteRewrite
// An object that represents the gateway route to rewrite.
type GrpcGatewayRouteRewrite struct {
	Hostname *GatewayRouteHostnameRewrite `json:"hostname,omitempty"`
}
