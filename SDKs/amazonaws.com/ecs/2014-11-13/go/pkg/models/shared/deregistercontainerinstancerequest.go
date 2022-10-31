package shared



type DeregisterContainerInstanceRequest struct {
    Cluster *string `json:"cluster,omitempty"`
    ContainerInstance string `json:"containerInstance"`
    Force *bool `json:"force,omitempty"`
    
}

