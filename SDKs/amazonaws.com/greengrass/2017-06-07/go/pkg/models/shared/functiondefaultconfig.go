package shared

// FunctionDefaultConfig
// The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
type FunctionDefaultConfig struct {
	Execution *FunctionDefaultExecutionConfig `json:"Execution,omitempty"`
}
