package shared

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
