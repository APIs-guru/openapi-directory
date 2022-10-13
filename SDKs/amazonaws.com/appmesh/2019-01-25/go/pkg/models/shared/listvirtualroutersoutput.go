package shared

type ListVirtualRoutersOutput struct {
	NextToken      *string            `json:"nextToken"`
	VirtualRouters []VirtualRouterRef `json:"virtualRouters"`
}
