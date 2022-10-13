package shared

type FunctionExecutionConfig struct {
	IsolationMode *FunctionIsolationModeEnum `json:"IsolationMode"`
	RunAs         *FunctionRunAsConfig       `json:"RunAs"`
}
