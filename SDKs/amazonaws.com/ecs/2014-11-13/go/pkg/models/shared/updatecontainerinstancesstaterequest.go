package shared



type UpdateContainerInstancesStateRequest struct {
    Cluster *string `json:"cluster,omitempty"`
    ContainerInstances []string `json:"containerInstances"`
    Status ContainerInstanceStatusEnum `json:"status"`
    
}

