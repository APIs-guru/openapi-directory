package shared

// ContainerOverride
// The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
type ContainerOverride struct {
	Command              []string              `json:"command,omitempty"`
	CPU                  *int64                `json:"cpu,omitempty"`
	Environment          []KeyValuePair        `json:"environment,omitempty"`
	EnvironmentFiles     []EnvironmentFile     `json:"environmentFiles,omitempty"`
	Memory               *int64                `json:"memory,omitempty"`
	MemoryReservation    *int64                `json:"memoryReservation,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	ResourceRequirements []ResourceRequirement `json:"resourceRequirements,omitempty"`
}
