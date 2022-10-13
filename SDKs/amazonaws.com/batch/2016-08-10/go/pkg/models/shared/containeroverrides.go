package shared

type ContainerOverrides struct {
	Command              []string              `json:"command"`
	Environment          []KeyValuePair        `json:"environment"`
	InstanceType         *string               `json:"instanceType"`
	Memory               *int64                `json:"memory"`
	ResourceRequirements []ResourceRequirement `json:"resourceRequirements"`
	Vcpus                *int64                `json:"vcpus"`
}
