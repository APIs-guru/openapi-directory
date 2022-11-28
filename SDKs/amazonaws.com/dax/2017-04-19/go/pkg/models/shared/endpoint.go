package shared

// Endpoint
// Represents the information required for client programs to connect to the endpoint for a DAX cluster.
type Endpoint struct {
	Address *string `json:"Address,omitempty"`
	Port    *int64  `json:"Port,omitempty"`
	URL     *string `json:"URL,omitempty"`
}
