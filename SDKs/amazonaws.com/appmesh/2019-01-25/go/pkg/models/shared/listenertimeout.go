package shared

type ListenerTimeout struct {
	Grpc  *GrpcTimeout `json:"grpc"`
	HTTP  *HTTPTimeout `json:"http"`
	Http2 *HTTPTimeout `json:"http2"`
	TCP   *TCPTimeout  `json:"tcp"`
}
