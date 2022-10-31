package shared



type FunctionExecutionConfig struct {
    IsolationMode *FunctionIsolationModeEnum `json:"IsolationMode,omitempty"`
    RunAs *FunctionRunAsConfig `json:"RunAs,omitempty"`
    
}

