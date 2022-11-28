package shared

// VirtualNodeGrpcConnectionPool
// An object that represents a type of connection pool.
type VirtualNodeGrpcConnectionPool struct {
	MaxRequests int64 `json:"maxRequests"`
}
