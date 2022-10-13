package shared

type VirtualGatewayConnectionPool struct {
	Grpc  *VirtualGatewayGrpcConnectionPool  `json:"grpc"`
	HTTP  *VirtualGatewayHTTPConnectionPool  `json:"http"`
	Http2 *VirtualGatewayHttp2ConnectionPool `json:"http2"`
}
