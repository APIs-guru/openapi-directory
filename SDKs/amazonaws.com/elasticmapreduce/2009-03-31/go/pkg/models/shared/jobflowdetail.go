package shared

type JobFlowDetail struct {
	AmiVersion            *string                      `json:"AmiVersion"`
	AutoScalingRole       *string                      `json:"AutoScalingRole"`
	BootstrapActions      []BootstrapActionDetail      `json:"BootstrapActions"`
	ExecutionStatusDetail JobFlowExecutionStatusDetail `json:"ExecutionStatusDetail"`
	Instances             JobFlowInstancesDetail       `json:"Instances"`
	JobFlowID             string                       `json:"JobFlowId"`
	JobFlowRole           *string                      `json:"JobFlowRole"`
	LogEncryptionKmsKeyID *string                      `json:"LogEncryptionKmsKeyId"`
	LogURI                *string                      `json:"LogUri"`
	Name                  string                       `json:"Name"`
	ScaleDownBehavior     *ScaleDownBehaviorEnum       `json:"ScaleDownBehavior"`
	ServiceRole           *string                      `json:"ServiceRole"`
	Steps                 []StepDetail                 `json:"Steps"`
	SupportedProducts     []string                     `json:"SupportedProducts"`
	VisibleToAllUsers     *bool                        `json:"VisibleToAllUsers"`
}
