package shared

type PortProtocolEnum string

const (
	PortProtocolEnumHTTP  PortProtocolEnum = "http"
	PortProtocolEnumTCP   PortProtocolEnum = "tcp"
	PortProtocolEnumHttp2 PortProtocolEnum = "http2"
	PortProtocolEnumGrpc  PortProtocolEnum = "grpc"
)
