package shared

// CustomRoutingListener
// A complex type for a listener for a custom routing accelerator.
type CustomRoutingListener struct {
	ListenerArn *string     `json:"ListenerArn,omitempty"`
	PortRanges  []PortRange `json:"PortRanges,omitempty"`
}
