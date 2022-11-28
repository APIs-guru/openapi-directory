package shared

// VirtualNodeConnectionPool
// <p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/>
type VirtualNodeConnectionPool struct {
	Grpc  *VirtualNodeGrpcConnectionPool  `json:"grpc,omitempty"`
	HTTP  *VirtualNodeHTTPConnectionPool  `json:"http,omitempty"`
	Http2 *VirtualNodeHttp2ConnectionPool `json:"http2,omitempty"`
	TCP   *VirtualNodeTCPConnectionPool   `json:"tcp,omitempty"`
}
