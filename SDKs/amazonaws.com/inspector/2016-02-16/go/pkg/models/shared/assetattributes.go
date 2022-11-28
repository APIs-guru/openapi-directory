package shared

// AssetAttributes
// A collection of attributes of the host from which the finding is generated.
type AssetAttributes struct {
	AgentID           *string            `json:"agentId,omitempty"`
	AmiID             *string            `json:"amiId,omitempty"`
	AutoScalingGroup  *string            `json:"autoScalingGroup,omitempty"`
	Hostname          *string            `json:"hostname,omitempty"`
	Ipv4Addresses     []string           `json:"ipv4Addresses,omitempty"`
	NetworkInterfaces []NetworkInterface `json:"networkInterfaces,omitempty"`
	SchemaVersion     int64              `json:"schemaVersion"`
	Tags              []Tag              `json:"tags,omitempty"`
}
