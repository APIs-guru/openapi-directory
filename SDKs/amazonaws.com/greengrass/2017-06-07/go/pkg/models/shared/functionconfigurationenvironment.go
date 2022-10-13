package shared

type FunctionConfigurationEnvironment struct {
	AccessSysfs            *bool                    `json:"AccessSysfs"`
	Execution              *FunctionExecutionConfig `json:"Execution"`
	ResourceAccessPolicies []ResourceAccessPolicy   `json:"ResourceAccessPolicies"`
	Variables              map[string]string        `json:"Variables"`
}
