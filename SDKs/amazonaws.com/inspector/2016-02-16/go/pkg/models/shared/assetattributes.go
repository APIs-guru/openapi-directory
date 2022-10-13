package shared

type AssetAttributes struct {
	AgentID           *string            `json:"agentId"`
	AmiID             *string            `json:"amiId"`
	AutoScalingGroup  *string            `json:"autoScalingGroup"`
	Hostname          *string            `json:"hostname"`
	Ipv4Addresses     []string           `json:"ipv4Addresses"`
	NetworkInterfaces []NetworkInterface `json:"networkInterfaces"`
	SchemaVersion     int64              `json:"schemaVersion"`
	Tags              []Tag              `json:"tags"`
}
