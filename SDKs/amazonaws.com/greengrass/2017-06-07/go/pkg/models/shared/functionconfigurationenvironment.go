package shared

type FunctionConfigurationEnvironment struct {
	AccessSysfs            *bool                    `json:"AccessSysfs,omitempty"`
	Execution              *FunctionExecutionConfig `json:"Execution,omitempty"`
	ResourceAccessPolicies []ResourceAccessPolicy   `json:"ResourceAccessPolicies,omitempty"`
	Variables              map[string]string        `json:"Variables,omitempty"`
}
