package shared



type VirtualRouterData struct {
    MeshName string `json:"meshName"`
    Metadata *ResourceMetadata `json:"metadata,omitempty"`
    Spec *VirtualRouterSpec `json:"spec,omitempty"`
    Status *VirtualRouterStatus `json:"status,omitempty"`
    VirtualRouterName string `json:"virtualRouterName"`
    
}

