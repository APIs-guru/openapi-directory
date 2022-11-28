package shared

// FunctionExecutionConfig
// Configuration information that specifies how a Lambda function runs.
type FunctionExecutionConfig struct {
	IsolationMode *FunctionIsolationModeEnum `json:"IsolationMode,omitempty"`
	RunAs         *FunctionRunAsConfig       `json:"RunAs,omitempty"`
}
