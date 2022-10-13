package shared

type ExecuteCommandConfiguration struct {
	KmsKeyID         *string                         `json:"kmsKeyId"`
	LogConfiguration *ExecuteCommandLogConfiguration `json:"logConfiguration"`
	Logging          *ExecuteCommandLoggingEnum      `json:"logging"`
}
