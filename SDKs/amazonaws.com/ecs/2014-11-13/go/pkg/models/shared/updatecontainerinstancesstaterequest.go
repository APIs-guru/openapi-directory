package shared

type UpdateContainerInstancesStateRequest struct {
	Cluster            *string                     `json:"cluster"`
	ContainerInstances []string                    `json:"containerInstances"`
	Status             ContainerInstanceStatusEnum `json:"status"`
}
