package shared

// PortRange
// A complex type for a range of ports for a listener.
type PortRange struct {
	FromPort *int64 `json:"FromPort,omitempty"`
	ToPort   *int64 `json:"ToPort,omitempty"`
}
