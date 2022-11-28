package shared

// ListVirtualRoutersOutput
// <zonbook></zonbook><xhtml></xhtml>
type ListVirtualRoutersOutput struct {
	NextToken      *string            `json:"nextToken,omitempty"`
	VirtualRouters []VirtualRouterRef `json:"virtualRouters"`
}
