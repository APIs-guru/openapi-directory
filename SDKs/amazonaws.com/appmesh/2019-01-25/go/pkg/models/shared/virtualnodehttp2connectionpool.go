package shared

// VirtualNodeHttp2ConnectionPool
// An object that represents a type of connection pool.
type VirtualNodeHttp2ConnectionPool struct {
	MaxRequests int64 `json:"maxRequests"`
}
