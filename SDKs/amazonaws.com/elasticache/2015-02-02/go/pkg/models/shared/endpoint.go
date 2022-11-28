package shared

// Endpoint
// Represents the information required for client programs to connect to a cache node.
type Endpoint struct {
	Address *string
	Port    *int64
}
