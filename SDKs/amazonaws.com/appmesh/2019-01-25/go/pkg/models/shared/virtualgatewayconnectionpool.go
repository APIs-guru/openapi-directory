package shared



type VirtualGatewayConnectionPool struct {
    Grpc *VirtualGatewayGrpcConnectionPool `json:"grpc,omitempty"`
    HTTP *VirtualGatewayHTTPConnectionPool `json:"http,omitempty"`
    Http2 *VirtualGatewayHttp2ConnectionPool `json:"http2,omitempty"`
    
}

