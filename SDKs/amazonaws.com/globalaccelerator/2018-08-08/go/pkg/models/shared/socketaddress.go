package shared

type SocketAddress struct {
	IPAddress *string `json:"IpAddress"`
	Port      *int64  `json:"Port"`
}
