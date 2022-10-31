package shared



type ListVirtualServicesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    VirtualServices []VirtualServiceRef `json:"virtualServices"`
    
}

