package shared

// VirtualGatewayHTTPConnectionPool
// An object that represents a type of connection pool.
type VirtualGatewayHTTPConnectionPool struct {
	MaxConnections     int64  `json:"maxConnections"`
	MaxPendingRequests *int64 `json:"maxPendingRequests,omitempty"`
}
