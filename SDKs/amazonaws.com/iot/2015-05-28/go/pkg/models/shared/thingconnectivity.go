package shared

type ThingConnectivity struct {
	Connected        *bool   `json:"connected"`
	DisconnectReason *string `json:"disconnectReason"`
	Timestamp        *int64  `json:"timestamp"`
}
