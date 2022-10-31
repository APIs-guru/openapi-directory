package shared



type VirtualNodeHTTPConnectionPool struct {
    MaxConnections int64 `json:"maxConnections"`
    MaxPendingRequests *int64 `json:"maxPendingRequests,omitempty"`
    
}

