package shared

type VirtualNodeConnectionPool struct {
	Grpc  *VirtualNodeGrpcConnectionPool  `json:"grpc"`
	HTTP  *VirtualNodeHTTPConnectionPool  `json:"http"`
	Http2 *VirtualNodeHttp2ConnectionPool `json:"http2"`
	TCP   *VirtualNodeTCPConnectionPool   `json:"tcp"`
}
