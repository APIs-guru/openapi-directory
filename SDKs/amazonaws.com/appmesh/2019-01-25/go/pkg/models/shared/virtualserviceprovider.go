package shared

// VirtualServiceProvider
// An object that represents the provider for a virtual service.
type VirtualServiceProvider struct {
	VirtualNode   *VirtualNodeServiceProvider   `json:"virtualNode,omitempty"`
	VirtualRouter *VirtualRouterServiceProvider `json:"virtualRouter,omitempty"`
}
