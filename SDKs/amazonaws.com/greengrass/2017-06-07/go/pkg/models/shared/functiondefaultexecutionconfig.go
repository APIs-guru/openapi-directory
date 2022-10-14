package shared

type FunctionDefaultExecutionConfig struct {
	IsolationMode *FunctionIsolationModeEnum `json:"IsolationMode,omitempty"`
	RunAs         *FunctionRunAsConfig       `json:"RunAs,omitempty"`
}
