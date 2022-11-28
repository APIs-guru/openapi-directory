package shared

// CustomRoutingAcceleratorAttributes
// Attributes of a custom routing accelerator.
type CustomRoutingAcceleratorAttributes struct {
	FlowLogsEnabled  *bool   `json:"FlowLogsEnabled,omitempty"`
	FlowLogsS3Bucket *string `json:"FlowLogsS3Bucket,omitempty"`
	FlowLogsS3Prefix *string `json:"FlowLogsS3Prefix,omitempty"`
}
