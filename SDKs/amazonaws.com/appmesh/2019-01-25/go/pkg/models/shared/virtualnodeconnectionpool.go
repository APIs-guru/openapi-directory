package shared



type VirtualNodeConnectionPool struct {
    Grpc *VirtualNodeGrpcConnectionPool `json:"grpc,omitempty"`
    HTTP *VirtualNodeHTTPConnectionPool `json:"http,omitempty"`
    Http2 *VirtualNodeHttp2ConnectionPool `json:"http2,omitempty"`
    TCP *VirtualNodeTCPConnectionPool `json:"tcp,omitempty"`
    
}

