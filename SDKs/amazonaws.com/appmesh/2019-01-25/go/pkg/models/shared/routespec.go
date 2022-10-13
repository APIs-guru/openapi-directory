package shared

type RouteSpec struct {
	GrpcRoute  *GrpcRoute `json:"grpcRoute"`
	Http2Route *HTTPRoute `json:"http2Route"`
	HTTPRoute  *HTTPRoute `json:"httpRoute"`
	Priority   *int64     `json:"priority"`
	TCPRoute   *TCPRoute  `json:"tcpRoute"`
}
