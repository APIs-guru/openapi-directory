package shared

type VirtualGatewayHTTPConnectionPool struct {
	MaxConnections     int64  `json:"maxConnections"`
	MaxPendingRequests *int64 `json:"maxPendingRequests,omitempty"`
}
