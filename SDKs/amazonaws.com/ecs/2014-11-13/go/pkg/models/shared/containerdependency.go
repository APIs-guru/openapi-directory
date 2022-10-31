package shared

type ContainerDependency struct {
	Condition     ContainerConditionEnum `json:"condition"`
	ContainerName string                 `json:"containerName"`
}
