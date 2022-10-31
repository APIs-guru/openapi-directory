package shared



type JobFlowDetail struct {
    AmiVersion *string `json:"AmiVersion,omitempty"`
    AutoScalingRole *string `json:"AutoScalingRole,omitempty"`
    BootstrapActions []BootstrapActionDetail `json:"BootstrapActions,omitempty"`
    ExecutionStatusDetail JobFlowExecutionStatusDetail `json:"ExecutionStatusDetail"`
    Instances JobFlowInstancesDetail `json:"Instances"`
    JobFlowID string `json:"JobFlowId"`
    JobFlowRole *string `json:"JobFlowRole,omitempty"`
    LogEncryptionKmsKeyID *string `json:"LogEncryptionKmsKeyId,omitempty"`
    LogURI *string `json:"LogUri,omitempty"`
    Name string `json:"Name"`
    ScaleDownBehavior *ScaleDownBehaviorEnum `json:"ScaleDownBehavior,omitempty"`
    ServiceRole *string `json:"ServiceRole,omitempty"`
    Steps []StepDetail `json:"Steps,omitempty"`
    SupportedProducts []string `json:"SupportedProducts,omitempty"`
    VisibleToAllUsers *bool `json:"VisibleToAllUsers,omitempty"`
    
}

