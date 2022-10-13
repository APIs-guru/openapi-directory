package shared

type UpdateAcceleratorAttributesRequest struct {
	AcceleratorArn   string  `json:"AcceleratorArn"`
	FlowLogsEnabled  *bool   `json:"FlowLogsEnabled"`
	FlowLogsS3Bucket *string `json:"FlowLogsS3Bucket"`
	FlowLogsS3Prefix *string `json:"FlowLogsS3Prefix"`
}
