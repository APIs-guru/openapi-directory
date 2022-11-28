package shared

// SocketAddress
// Information about the socket address.
type SocketAddress struct {
	Name string `json:"name"`
	Port int64  `json:"port"`
}
