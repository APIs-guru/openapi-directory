package shared

// VirtualNodeHTTPConnectionPool
// An object that represents a type of connection pool.
type VirtualNodeHTTPConnectionPool struct {
	MaxConnections     int64  `json:"maxConnections"`
	MaxPendingRequests *int64 `json:"maxPendingRequests,omitempty"`
}
