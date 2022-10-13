package shared

type FunctionDefaultExecutionConfig struct {
	IsolationMode *FunctionIsolationModeEnum `json:"IsolationMode"`
	RunAs         *FunctionRunAsConfig       `json:"RunAs"`
}
