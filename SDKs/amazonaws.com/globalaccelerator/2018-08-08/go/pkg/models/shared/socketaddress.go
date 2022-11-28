package shared

// SocketAddress
// An IP address/port combination.
type SocketAddress struct {
	IPAddress *string `json:"IpAddress,omitempty"`
	Port      *int64  `json:"Port,omitempty"`
}
