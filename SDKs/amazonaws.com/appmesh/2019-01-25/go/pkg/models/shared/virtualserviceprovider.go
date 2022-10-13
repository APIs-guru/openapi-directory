package shared

type VirtualServiceProvider struct {
	VirtualNode   *VirtualNodeServiceProvider   `json:"virtualNode"`
	VirtualRouter *VirtualRouterServiceProvider `json:"virtualRouter"`
}
