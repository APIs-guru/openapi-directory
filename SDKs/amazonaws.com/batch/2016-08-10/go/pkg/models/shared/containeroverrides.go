package shared

// ContainerOverrides
// The overrides that should be sent to a container.
type ContainerOverrides struct {
	Command              []string              `json:"command,omitempty"`
	Environment          []KeyValuePair        `json:"environment,omitempty"`
	InstanceType         *string               `json:"instanceType,omitempty"`
	Memory               *int64                `json:"memory,omitempty"`
	ResourceRequirements []ResourceRequirement `json:"resourceRequirements,omitempty"`
	Vcpus                *int64                `json:"vcpus,omitempty"`
}
