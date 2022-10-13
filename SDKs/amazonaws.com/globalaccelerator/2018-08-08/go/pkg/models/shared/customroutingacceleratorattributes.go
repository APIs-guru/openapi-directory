package shared

type CustomRoutingAcceleratorAttributes struct {
	FlowLogsEnabled  *bool   `json:"FlowLogsEnabled"`
	FlowLogsS3Bucket *string `json:"FlowLogsS3Bucket"`
	FlowLogsS3Prefix *string `json:"FlowLogsS3Prefix"`
}
