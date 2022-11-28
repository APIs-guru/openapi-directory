package shared

// FunctionDefaultExecutionConfig
// Configuration information that specifies how a Lambda function runs.
type FunctionDefaultExecutionConfig struct {
	IsolationMode *FunctionIsolationModeEnum `json:"IsolationMode,omitempty"`
	RunAs         *FunctionRunAsConfig       `json:"RunAs,omitempty"`
}
