package shared



type ListVirtualRoutersOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    VirtualRouters []VirtualRouterRef `json:"virtualRouters"`
    
}

