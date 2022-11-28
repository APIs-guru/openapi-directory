package shared

// GatewayRouteSpec
// An object that represents a gateway route specification. Specify one gateway route type.
type GatewayRouteSpec struct {
	GrpcRoute  *GrpcGatewayRoute `json:"grpcRoute,omitempty"`
	Http2Route *HTTPGatewayRoute `json:"http2Route,omitempty"`
	HTTPRoute  *HTTPGatewayRoute `json:"httpRoute,omitempty"`
	Priority   *int64            `json:"priority,omitempty"`
}
