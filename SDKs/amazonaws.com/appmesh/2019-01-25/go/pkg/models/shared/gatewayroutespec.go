package shared

type GatewayRouteSpec struct {
	GrpcRoute  *GrpcGatewayRoute `json:"grpcRoute"`
	Http2Route *HTTPGatewayRoute `json:"http2Route"`
	HTTPRoute  *HTTPGatewayRoute `json:"httpRoute"`
	Priority   *int64            `json:"priority"`
}
