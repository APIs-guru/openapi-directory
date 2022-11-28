package shared

// ExecuteCommandConfiguration
// The details of the execute command configuration.
type ExecuteCommandConfiguration struct {
	KmsKeyID         *string                         `json:"kmsKeyId,omitempty"`
	LogConfiguration *ExecuteCommandLogConfiguration `json:"logConfiguration,omitempty"`
	Logging          *ExecuteCommandLoggingEnum      `json:"logging,omitempty"`
}
