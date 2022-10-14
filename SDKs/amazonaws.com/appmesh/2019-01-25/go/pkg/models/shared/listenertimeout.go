package shared

type ListenerTimeout struct {
	Grpc  *GrpcTimeout `json:"grpc,omitempty"`
	HTTP  *HTTPTimeout `json:"http,omitempty"`
	Http2 *HTTPTimeout `json:"http2,omitempty"`
	TCP   *TCPTimeout  `json:"tcp,omitempty"`
}
