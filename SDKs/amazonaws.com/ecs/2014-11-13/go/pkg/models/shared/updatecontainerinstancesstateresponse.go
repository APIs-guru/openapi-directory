package shared



type UpdateContainerInstancesStateResponse struct {
    ContainerInstances []ContainerInstance `json:"containerInstances,omitempty"`
    Failures []Failure `json:"failures,omitempty"`
    
}

