package shared

// ThingConnectivity
// The connectivity status of the thing.
type ThingConnectivity struct {
	Connected        *bool   `json:"connected,omitempty"`
	DisconnectReason *string `json:"disconnectReason,omitempty"`
	Timestamp        *int64  `json:"timestamp,omitempty"`
}
