package shared



type DiscoverPollEndpointRequest struct {
    Cluster *string `json:"cluster,omitempty"`
    ContainerInstance *string `json:"containerInstance,omitempty"`
    
}

