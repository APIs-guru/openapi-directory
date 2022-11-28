package shared

// PortRange
// A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>.
type PortRange struct {
	MaxRange *int64 `json:"MaxRange,omitempty"`
	MinRange int64  `json:"MinRange"`
}
