package shared



type VirtualServiceProvider struct {
    VirtualNode *VirtualNodeServiceProvider `json:"virtualNode,omitempty"`
    VirtualRouter *VirtualRouterServiceProvider `json:"virtualRouter,omitempty"`
    
}

