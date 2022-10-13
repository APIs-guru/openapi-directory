package shared

type ContainerOverride struct {
	Command              []string              `json:"command"`
	CPU                  *int64                `json:"cpu"`
	Environment          []KeyValuePair        `json:"environment"`
	EnvironmentFiles     []EnvironmentFile     `json:"environmentFiles"`
	Memory               *int64                `json:"memory"`
	MemoryReservation    *int64                `json:"memoryReservation"`
	Name                 *string               `json:"name"`
	ResourceRequirements []ResourceRequirement `json:"resourceRequirements"`
}
