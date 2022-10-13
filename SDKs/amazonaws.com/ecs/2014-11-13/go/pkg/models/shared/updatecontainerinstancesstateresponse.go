package shared

type UpdateContainerInstancesStateResponse struct {
	ContainerInstances []ContainerInstance `json:"containerInstances"`
	Failures           []Failure           `json:"failures"`
}
