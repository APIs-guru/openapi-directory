package shared

// Listener
// A complex type for a listener.
type Listener struct {
	ClientAffinity *ClientAffinityEnum `json:"ClientAffinity,omitempty"`
	ListenerArn    *string             `json:"ListenerArn,omitempty"`
	PortRanges     []PortRange         `json:"PortRanges,omitempty"`
	Protocol       *ProtocolEnum       `json:"Protocol,omitempty"`
}
