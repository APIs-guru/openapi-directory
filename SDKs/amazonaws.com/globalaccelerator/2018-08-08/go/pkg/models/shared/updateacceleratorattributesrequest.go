package shared



type UpdateAcceleratorAttributesRequest struct {
    AcceleratorArn string `json:"AcceleratorArn"`
    FlowLogsEnabled *bool `json:"FlowLogsEnabled,omitempty"`
    FlowLogsS3Bucket *string `json:"FlowLogsS3Bucket,omitempty"`
    FlowLogsS3Prefix *string `json:"FlowLogsS3Prefix,omitempty"`
    
}

