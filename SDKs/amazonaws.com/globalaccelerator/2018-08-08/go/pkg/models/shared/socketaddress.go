package shared

type SocketAddress struct {
	IPAddress *string `json:"IpAddress,omitempty"`
	Port      *int64  `json:"Port,omitempty"`
}
